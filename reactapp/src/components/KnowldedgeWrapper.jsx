import React, {useContext} from 'react'
import { KnowledgeForm } from './KnowledgeForm'
import {v4 as uuidv4} from 'uuid'
import { Knowledge } from './Knowledge'
import { EditKnowledgeForm } from './EditKnowledgeForm';
import IloContext from './Context/IloContext';
uuidv4()

export const KnowledgeWrapper = () => {

  const {knowledges, setKnowledges} = useContext(IloContext);

    const addKnowledge = knowledge =>  {
        setKnowledges([...knowledges, {id: uuidv4(), description: knowledge, completed: false, isEditing: false}])
        console.log(knowledges)
    }
    const deleteKnowledge = id => {
      setKnowledges(knowledges.filter(knowledge => knowledge.id !== id))

    }

    const editKnowledge = id => {
      setKnowledges(knowledges.map(knowledge => knowledge.id === id ? {...knowledge, isEditing: !knowledge.isEditing} : knowledge))
    }

    const editDescriptionKnowledge = (description, id) => {
      setKnowledges(knowledges.map(knowledge => knowledge.id === id ? {...knowledge,description, isEditing: !knowledge.isEditing} : knowledge))
    }
    
  return (
    <div className='Wrapper'>
        <KnowledgeForm addKnowledge={addKnowledge}/>
        <table className='table table-bordered table-hover border-dark text-center'>
          <thead>
            <tr>
              <th>ILO ID</th>
              <th>ILO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {knowledges.map((knowledge, index) => (
              
              knowledge.isEditing ? (
                <EditKnowledgeForm editKnowledge={editDescriptionKnowledge} description={knowledge}/>
              ) : (
                <Knowledge description={knowledge} key={knowledge.id} index={index} deleteKnowledge={deleteKnowledge} editKnowledge={editKnowledge}/>
                )))
                
            }
          </tbody>
        </table>
    </div>
  )
}
