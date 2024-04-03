import React, {useContext, useState, useEffect} from 'react'
import PeoContext from "./Context/PeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import PloContext from './Context/PloContext';
import axios from 'axios';
export const PloMapPeoTable = () => {
  const [plos, setPlos] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/plo/")
      .then((res) => {
        setPlos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])

  const [peos, setPeos] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/peo/")
      .then((res) => {
        setPeos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])
const [mappingPloAndPeo, setMappingPloAndPeo] = useState([]);
const [localMapping, setLocalMapping] = useState({});
const [savedMapping, setSavedMapping] = useState(true);

const isComplete = () => {
  const expectedSize = (plos.length) * (peos.length);
  const actualSize = Object.keys(localMapping).length;
  return actualSize === expectedSize;
};


useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/plomappeo/")
    .then((res) => {
      if (res.status === 200) {
        if (res.data.length > 0) {
          console.log('Fetched mapping data:', res.data);
          setMappingPloAndPeo(res.data);
        }
      } else {
        console.error("Failed to fetch data from the server");
      }
      
    })
    .catch((error) => {
      console.error('Error fetching mapping data:', error);
      alert("Something went wrong");
    });
}, []);

useEffect(() => {
  console.log('Updated mappingPloAndPeo:', mappingPloAndPeo);
  
  const newLocalMapping = {};
  mappingPloAndPeo.forEach(temp => {
    newLocalMapping[`${temp.plo}-${temp.peo}`] = temp.correlation_level;
  });

  console.log('Updated localMapping:', newLocalMapping);
  setLocalMapping(newLocalMapping);
}, [mappingPloAndPeo]);


const handleMappingChange = (ploIndex, peoIndex, value) => {
  setSavedMapping(false);
  setLocalMapping(localMapping => ({
      ...localMapping,
      [`${ploIndex}-${peoIndex}`]: value,
  }));
};

const handleSave = async () => {
  console.log(localMapping);
  for (const key in localMapping) {
    const [ploIndex, peoIndex] = key.split('-');
    const correlationData = {
      plo: parseInt(ploIndex, 10),
      peo: parseInt(peoIndex, 10),
      correlation_level: parseInt(localMapping[key], 10),
    };
    let flag = false;

    console.log(correlationData);
    
    for (const temp of mappingPloAndPeo) {
      console.log('Checking:', temp);
      if (correlationData.plo === temp.plo && correlationData.peo === temp.peo) {
        console.log('Matching!');
        try {
          await axios.put(`http://127.0.0.1:8000/api/plomappeo/${temp.id}/`, correlationData);
          console.log('Edit successful');
        } catch (error) {
          console.error('Error while updating correlations:', error);
          // Handle error
        }
        flag = true;
        break;
      }
    }

    if (!flag) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/plomappeo/", correlationData);
        console.log('Create successful:', response);
      } catch (error) {
        console.error('Error while saving correlations:', error);
        // Handle error
      }
    }
  }
  setSavedMapping(true);
};



  return (
    <div className='Wrapper' id='plomappeo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>Mapping of PLO and PEO</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <table className='table table-bordered table-hover border-dark text-center align-middle'>
            <thead>
                <tr>
                    <th>PLOs</th>
                    <th>PLO Description</th>
                    {
                        peos.map((peo,index)=>(
                            <th>PEO {index+1}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>


            {
                plos.map((plo,ploIndex)=>(
                    <tr>
                        <td>PLO{ploIndex+1}</td>
                        <td>{plo.descriptionPLO}</td>
                        {
                            peos.map((peo,peoIndex)=>(
                                <td>
                                  <select
                                    name="mapping"
                                    id="mapping"
                                    className='form-select'
                                    value={localMapping[`${plo.id}-${peo.id}`] || ''}
                                    onChange={(e) => handleMappingChange(plo.id, peo.id, e.target.value)}
                                  >
                                    <option value="">select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </select>
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
                <tr>
                    <td colSpan={peos.length+2} className='text-center'>Level of Correlation: 3-High, 2-Medium, 1-Low</td>
                </tr>
            </tbody>
        </table>
        <button type='button' className='btn btn-success mb-5' onClick={handleSave}>Save</button>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/plo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
            <Link
                to={(isComplete() && savedMapping) ? '/course' : '#'}
                onClick={(e) => {
                    if (!isComplete()) {
                      e.preventDefault();
                      alert("Please select values for all fields before proceeding.");
                    }
                    else if(!savedMapping)
                    {
                      e.preventDefault();
                      alert("Please save changes");
                    }
                }}
            >
                <button
                    type='button'
                    className={`form-btn btn ${isComplete() ? '' : 'disabled'}`}
                >
                    Next
                </button>
            </Link>
              
            </div>
        </div>
      
    </div>
  )
}
