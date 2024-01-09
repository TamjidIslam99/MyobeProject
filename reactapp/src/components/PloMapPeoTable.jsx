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
const [mappingPloAndPeo, setMappingPloAndPeo] = useState({});
const [localMapping, setLocalMapping] = useState(mappingPloAndPeo);
const [savedMapping, setSavedMapping] = useState(false);

const isComplete = () => {
  const expectedSize = (plos.length) * (peos.length);
  const actualSize = Object.keys(mappingPloAndPeo).length;
  return actualSize === expectedSize;
};

const handleMappingChange = (ploIndex, peoIndex, value) => {
  setLocalMapping(localMapping => ({
      ...localMapping,
      [`${ploIndex}-${peoIndex}`]: value,
  }));
};

const handleSave = () => {
  // Update the main state with the local state
  setMappingPloAndPeo(localMapping);
  console.log(mappingPloAndPeo);
  // Set the savedMapping state to true to indicate that the data is saved
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
                            <th>PEO 1 {index+1}</th>
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
                                    value={localMapping[`${ploIndex}-${peoIndex}`] || ''}
                                    onChange={(e) => handleMappingChange(ploIndex, peoIndex, e.target.value)}
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
      
    </div>
  )
}
