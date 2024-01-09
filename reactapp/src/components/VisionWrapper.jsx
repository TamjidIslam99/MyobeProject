import React, {useState} from 'react'
import { VisionForm } from './VisionForm'
import {v4 as uuidv4} from 'uuid'
import { Vision } from './Vision'
import { EditVisionForm } from './EditVisionForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
uuidv4()

export const VisionWrapper = () => {
    const [visions, setVisions] = useState([])

    const addVision = vision =>  {
        setVisions([...visions, {id: uuidv4(), description: vision, completed: false, isEditing: false}])
        console.log(visions)
    }
    const deleteVision = id => {
      setVisions(visions.filter(vision => vision.id !== id))

    }

    const editVision = id => {
      setVisions(visions.map(vision => vision.id === id ? {...vision, isEditing: !vision.isEditing} : vision))
    }

    const editDescription = (description, id) => {
      setVisions(visions.map(vision => vision.id === id ? {...vision,description, isEditing: !vision.isEditing} : vision))
    }
    const isComplete = () => {
      return visions.length !== 0;
    };
    
  return (
    <div className='Wrapper' id='vision'>
        <div className='row'>
          <div className='col-4 Heading1'>

          </div>
          <div className='col-4 Heading2'>
            <h2 >Vision</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <VisionForm addVision={addVision}/>
        <table className='table table-bordered text-center border-dark'>
          <thead>
            <tr>
              <th>Vision ID</th>
              <th>Vision Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {visions.map((vision, index) => (
              
              vision.isEditing ? (
                <EditVisionForm editVision={editDescription} description={vision}/>
              ) : (
                <Vision description={vision} key={vision.id} index={index} deleteVision={deleteVision} editVision={editVision}/>
                )))
                
            }
          </tbody>
        </table>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/mission'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link
                    to={isComplete() ? '/curriculum' : '#'}
                    onClick={(e) => {
                        if (!isComplete()) {
                            e.preventDefault();
                            alert("Please add at least one Vision.");
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
