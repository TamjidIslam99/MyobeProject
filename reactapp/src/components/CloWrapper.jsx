import React, {useEffect,useState} from 'react'
import { CloForm } from './CloForm'
import {v4 as uuidv4} from 'uuid'
import { Clo } from './Clo'
import { EditCloForm } from './EditCloForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import CloContext from "./Context/CloContext";
import axios from 'axios';
uuidv4()

export const CloWrapper = () => {


  const [clos, setClos] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/clo/")
      .then((res) => {
        setClos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])
  const addClo = (clos,level) => {
  
    const requestData = {
      descriptionCLO: clos,
      knowledge_level: level,
      isEditing: false
    };
    
    axios
      .post('http://127.0.0.1:8000/api/clo/', requestData)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setClos(prevclos => [...prevclos, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const deleteClo = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/clo/${id}/`)
        .then(() => {
            const newclo = clos.filter(t => {
                return t.id !== id
            });
            setClos(newclo);
        }).catch(() => {
            alert("Something went wrong");
        })
}
    const editClo = id => {
        setClos(clos.map(clo => clo.id === id ? {...clo, isEditing: !clo.isEditing} : clo))
    }
    const editDescriptionClo = (descriptionCLO, knowledge_level, id) => {
  const requestData = {
    descriptionCLO: descriptionCLO,
    knowledge_level:knowledge_level // Include data for the knowledge_level column
    // Add other properties for additional columns here
  };

  axios
    .put(`http://127.0.0.1:8000/api/clo/${id}/`, requestData)
    .then((response) => {
      // Handle the response if needed
      setClos(prevclos =>
        prevclos.map(clo =>
          clo.id === id
            ? { ...clo, descriptionCLO,  knowledge_level, isEditing: !clo.isEditing }
            : clo
        )
      );
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


    const isComplete = () => {
      return clos.length !== 0;
    };

  return (
    <div className='Wrapper' id='clo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Course Learning Outcomes (CLO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <CloForm addClo={addClo}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>CLO ID</th>
              <th>CLO Description</th>
              <th>Knowledge Level</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clos.map((clo, index) => (
              
              clo.isEditing ? (
                <EditCloForm editClo={editDescriptionClo} descriptionCLO={clo}/>
              ) : (
                <Clo descriptionCLO={clo} key={clo.id} index={index} deleteClo={deleteClo} editClo={editClo}/>
                )))
                
            }
          </tbody>
        </table>
        
       
    </div>
  )
}
