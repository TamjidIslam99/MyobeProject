import React, {useContext, useState} from 'react'
import { PeoForm } from './PeoForm'
import {v4 as uuidv4} from 'uuid'
import { Peo } from './Peo'
import { EditPeoForm } from './EditPeoForm';
import PeoContext from "./Context/PeoContext";
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
uuidv4()

export const PeoWrapper = () => {

    const [peos, setPeos] = useState([]);
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/peo/")
        .then((res) => {
          setPeos(res.data)
        }).catch(() => {
          alert("Something went wrong");
        })
    }, [])
    const addPeo = peos => {
      const requestData = { descriptionPEO: peos, isEditing: false};
    
      axios
        .post('http://127.0.0.1:8000/api/peo/', requestData)
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
          setPeos(prevPeos => [...prevPeos, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const deletePeo = (id) => {
      axios.delete(`http://127.0.0.1:8000/api/peo/${id}/`)
          .then(() => {
              const newPeo = peos.filter(t => {
                  return t.id !== id
              });
              setPeos(newPeo);
          }).catch(() => {
              alert("Something went wrong");
          })
  }

    const editPeo = id => {
        setPeos(peos.map(peo => peo.id === id ? {...peo, isEditing: !peo.isEditing} : peo))
    }
   

    const isComplete = () => {
      return peos.length !== 0;
    };
    const editDescription = (descriptionPEO, id) => {
    
    const requestData = { descriptionPEO: descriptionPEO };

    axios
      .put(`http://127.0.0.1:8000/api/peo/${id}/`, requestData)
      .then((response) => {
        // Handle the response if needed
        setPeos(prevPeos => prevPeos.map(peo => peo.id === id ? {...peo,descriptionPEO, isEditing: !peo.isEditing} : peo))
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);      
      });
}
  return (
    <div className='Wrapper' id='peo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2>Program Educational Outcomes (PEO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <PeoForm addPeo={addPeo}/>
        <table className='table table-bordered table-hover text-center border-dark'>
          <thead>
            <tr>
              <th>PEO ID</th>
              <th>PEO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {peos.map((peo, index) => (
              
              peo.isEditing ? (
                <EditPeoForm editPeo={editDescription} descriptionPEO={peo}/>
              ) : (
                <Peo descriptionPEO={peo} key={peo.id} index={index} deletePeo={deletePeo} editPeo={editPeo}/>
                )))
                
            }
          </tbody>
        </table>


    </div>
  )
}
