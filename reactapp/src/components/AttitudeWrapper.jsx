import React, { useState,useEffect} from 'react'
import { AttitudeForm } from './AttitudeForm'
import {v4 as uuidv4} from 'uuid'
import { Attitude } from './Attitude'
import { EditAttitudeForm } from './EditAttitudeForm';
import IloContext from './Context/IloContext';
import axios from 'axios';
uuidv4()

export const AttitudeWrapper = () => {

  const [attitudes, setAttitudes] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/attitude/")
      .then((res) => {
        setAttitudes(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])
  const addAttitude = (description) => {
  
    const requestData = {
      description:description,

      isEditing: false
    };
    
    axios
      .post('http://127.0.0.1:8000/api/attitude/', requestData)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setAttitudes(prevattitudes => [...prevattitudes, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const deleteAttitude = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/attitude/${id}/`)
        .then(() => {
            const newAttitude = attitudes.filter(t => {
                return t.id !== id
            });
            setAttitudes(newAttitude);
        }).catch(() => {
            alert("Something went wrong");
        })
}
    const editAttitude = id => {
      setAttitudes(attitudes.map(attitude => attitude.id === id ? {...attitude, isEditing: !attitude.isEditing} : attitude))
    }
    const editDescriptionAttitude = (description,  id) => {
  const requestData = {
    description: description,
     // Include data for the knowledge_level column
    // Add other properties for additional columns here
  };

  axios
    .put(`http://127.0.0.1:8000/api/attitude/${id}/`, requestData)
    .then((response) => {
      // Handle the response if needed
      setAttitudes(prevattitudes =>
        prevattitudes.map(attitude =>
          attitude.id === id
            ? { ...attitude, description,   isEditing: !attitude.isEditing }
            : attitude
        )
      );
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

    
  return (
    <div className='Wrapper'>
        <AttitudeForm addAttitude={addAttitude}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>ILO ID</th>
              <th>ILO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {attitudes.map((attitude, index) => (
              
              attitude.isEditing ? (
                <EditAttitudeForm editAttitude={editDescriptionAttitude} description={attitude}/>
              ) : (
                <Attitude description={attitude} key={attitude.id} index={index} deleteAttitude={deleteAttitude} editAttitude={editAttitude}/>
                )))
                
            }
          </tbody>
        </table>
    </div>
  )
}
