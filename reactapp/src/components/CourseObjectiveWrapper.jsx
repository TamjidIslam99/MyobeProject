import React, {useState} from 'react'
import { CourseObjectiveForm } from './CourseObjectiveForm'
import {v4 as uuidv4} from 'uuid'
import { CourseObjective } from './CourseObjective'
import { EditCourseObjectiveForm } from './EditCourseObjectiveForm';
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
uuidv4()

export const CourseObjectiveWrapper = () => {

    const [courseObjectives, setCourseObjectives] = useState([])

    const addCourseObjective = courseObjective =>  {
        setCourseObjectives([...courseObjectives, {id: uuidv4(), description: courseObjective, completed: false, isEditing: false}])
        console.log(courseObjectives)
    }
    const deleteCourseObjective = id => {
      setCourseObjectives(courseObjectives.filter(courseObjective => courseObjective.id !== id))

    }

    const editCourseObjective = id => {
      setCourseObjectives(courseObjectives.map(courseObjective => courseObjective.id === id ? {...courseObjective, isEditing: !courseObjective.isEditing} : courseObjective))
    }

    const editDescriptionCourseObjective = (description, id) => {
      setCourseObjectives(courseObjectives.map(courseObjective => courseObjective.id === id ? {...courseObjective,description, isEditing: !courseObjective.isEditing} : courseObjective))
    }

    const isComplete = () => {
      return courseObjectives.length !== 0;
    };
    
  return (
    <div className='Wrapper' id='courseobjective'>
      <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
           <h2>Course Objectives(CO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        
        <CourseObjectiveForm addCourseObjective={addCourseObjective}/>
        <table className='table table-bordered table-hover border-dark text-center'>
          <thead>
            <tr>
              <th>CO ID</th>
              <th>CO Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courseObjectives.map((courseObjective, index) => (
              
              courseObjective.isEditing ? (
                <EditCourseObjectiveForm editCourseObjective={editDescriptionCourseObjective} description={courseObjective}/>
              ) : (
                <CourseObjective description={courseObjective} key={courseObjective.id} index={index} deleteCourseObjective={deleteCourseObjective} editCourseObjective={editCourseObjective}/>
                )))
                
            }
          </tbody>
        </table>
        
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/courseinfo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link
                  to={isComplete() ? '/clo' : '#'}
                  onClick={(e) => {
                      if (!isComplete()) {
                          e.preventDefault();
                          alert("Please add at least one Course Objective.");
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
