import React, {useContext,useState,useEffect} from 'react'
import { SkillForm } from './SkillForm'
import {v4 as uuidv4} from 'uuid'
import { Skill } from './Skill'
import { EditSkillForm } from './EditSkillForm';
import IloContext from './Context/IloContext';
import axios  from 'axios';
uuidv4()

export const SkillWrapper = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/skill/")
      .then((res) => {
        setSkills(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])
  const addSkill = (description) => {
  
    const requestData = {
      description:description,

      isEditing: false
    };
    
    axios
      .post('http://127.0.0.1:8000/api/skill/', requestData)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setSkills(prevskills => [...prevskills, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const deleteSkill = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/skill/${id}/`)
        .then(() => {
            const newskill = skills.filter(t => {
                return t.id !== id
            });
            setSkills(newskill);
        }).catch(() => {
            alert("Something went wrong");
        })
}
    const editSkill = id => {
      setSkills(skills.map(skill => skill.id === id ? {...skill, isEditing: !skill.isEditing} : skill))
    }
    const editDescriptionSkill = (description,  id) => {
  const requestData = {
    description: description,
     // Include data for the knowledge_level column
    // Add other properties for additional columns here
  };

  axios
    .put(`http://127.0.0.1:8000/api/skill/${id}/`, requestData)
    .then((response) => {
      // Handle the response if needed
      setSkills(prevskills =>
        prevskills.map(skill =>
          skill.id === id
            ? { ...skill, description,   isEditing: !skill.isEditing }
            : skill
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
        <SkillForm addSkill={addSkill}/>
        <table className='table table-bordered text-center table-hover border-dark'>
          <thead>
            <tr>
              <th>ILO ID</th>
              <th>ILO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              
              skill.isEditing ? (
                <EditSkillForm editSkill={editDescriptionSkill} description={skill}/>
              ) : (
                <Skill description={skill} key={skill.id} index={index} deleteSkill={deleteSkill} editSkill={editSkill}/>
                )))
                
            }
          </tbody>
        </table>
    </div>
  )
}
