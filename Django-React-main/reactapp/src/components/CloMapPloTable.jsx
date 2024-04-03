import React, {useState, useEffect} from 'react'
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import axios from 'axios';
export const CloMapPloTable = () => {

  const [clos, setClos] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/clo/")
      .then((res) => {
        setClos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])

  const [plos, setPlos] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/plo/")
      .then((res) => {
        setPlos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])

const [mappingCloAndPlo, setMappingCloAndPlo] = useState([]);
const [localMapping, setLocalMapping] = useState({});
const [savedMapping, setSavedMapping] = useState(true);

const isComplete = () => {
  const expectedSize = (clos.length) * (plos.length);
  const actualSize = Object.keys(localMapping).length;
  return actualSize === expectedSize;
};


useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/clomapplo/")
    .then((res) => {
      if (res.status === 200) {
        if (res.data.length > 0) {
          console.log('Fetched mapping data:', res.data);
          setMappingCloAndPlo(res.data);
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
  console.log('Updated mappingCloAndPlo:', mappingCloAndPlo);
  
  const newLocalMapping = {};
  mappingCloAndPlo.forEach(temp => {
    newLocalMapping[`${temp.clo}-${temp.plo}`] = temp.correlation_level;
  });

  console.log('Updated localMapping:', newLocalMapping);
  setLocalMapping(newLocalMapping);
}, [mappingCloAndPlo]);


const handleMappingChange = (cloIndex, ploIndex, value) => {
  setSavedMapping(false);
  setLocalMapping(localMapping => ({
      ...localMapping,
      [`${cloIndex}-${ploIndex}`]: value,
  }));
};

const handleSave = async () => {
  console.log(localMapping);
  for (const key in localMapping) {
    const [cloIndex, ploIndex] = key.split('-');
    const correlationData = {
      clo: parseInt(cloIndex, 10),
      plo: parseInt(ploIndex, 10),
      correlation_level: parseInt(localMapping[key], 10),
    };
    let flag = false;

    console.log(correlationData);
    
    for (const temp of mappingCloAndPlo) {
      console.log('Checking:', temp);
      if (correlationData.clo === temp.clo && correlationData.plo === temp.plo) {
        console.log('Matching!');
        try {
          await axios.put(`http://127.0.0.1:8000/api/clomapplo/${temp.id}/`, correlationData);
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
        const response = await axios.post("http://127.0.0.1:8000/api/clomapplo/", correlationData);
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
    <div className='Wrapper' id='clomapplo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>Mapping of CLO and PLO</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <table className='table table-bordered table-hover border-dark text-center align-middle'>
            <thead>
                <tr>
                    <th colSpan={2}>1st Year 1st Semester</th>
                    <th>Course Code: CSE 155</th>
                    <th colSpan={plos.length+2}>Course Title: Data Structures</th>
                </tr>
                <tr>
                    <th>CLOs</th>
                    <th>CLO Description</th>
                    {
                        plos.map((plo,index)=>(
                            <th>M{index+1}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>


            {
                clos.map((clo,cloIndex)=>(
                    <tr>
                        <td>CLO{cloIndex+1}</td>
                        <td>{clo.descriptionCLO}</td>
                        {
                            plos.map((plo,ploIndex)=>(
                                <td>
                                  <select
                                    name="mapping"
                                    id="mapping"
                                    className='form-select'
                                    value={localMapping[`${clo.id}-${plo.id}`] || ''}
                                    onChange={(e) => handleMappingChange(clo.id, plo.id, e.target.value)}
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
                    <td colSpan={plos.length+2} className='text-center'>Level of Correlation: 3-High, 2-Medium, 1-Low</td>
                </tr>
            </tbody>
        </table>
        <button type='button' className='btn btn-success mb-5' onClick={handleSave}>Save</button>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/clo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
            <Link
                to={(isComplete() && savedMapping) ? '/cloPloReasoning' : '#'}
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
