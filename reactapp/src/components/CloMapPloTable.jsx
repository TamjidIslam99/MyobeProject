import React, {useContext, useState, useEffect} from 'react'
import PloContext from "./Context/PloContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import CloContext from './Context/CloContext';

export const CloMapPloTable = () => {

const {plos} = useContext(PloContext);
const {clos} = useContext(CloContext);

const [mappingCloAndPlo, setMappingCloAndPlo] = useState({});
const [localMapping, setLocalMapping] = useState(mappingCloAndPlo);
const [savedMapping, setSavedMapping] = useState(false);


const isComplete = () => {
  const expectedSize = (clos.length) * (plos.length);
  const actualSize = Object.keys(mappingCloAndPlo).length;
  return actualSize === expectedSize;
};

const handleMappingChange = (cloIndex, ploIndex, value) => {
  setLocalMapping(localMapping => ({
      ...localMapping,
      [`${cloIndex}-${ploIndex}`]: value,
  }));
};

const handleSave = () => {
  // Update the main state with the local state
  setMappingCloAndPlo(localMapping);
  console.log(mappingCloAndPlo);
  // Set the savedMapping state to true to indicate that the data is saved
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
                        <td>{clo.description}</td>
                        {
                            plos.map((plo,ploIndex)=>(
                                <td>
                                  <select
                                    name="mapping"
                                    id="mapping"
                                    className='form-select'
                                    value={localMapping[`${cloIndex}-${ploIndex}`] || ''}
                                    onChange={(e) => handleMappingChange(cloIndex, ploIndex, e.target.value)}
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
