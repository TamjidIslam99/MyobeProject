import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const CourseObjective = ({description, index, deleteCourseObjective, editCourseObjective}) => {
  return (
    <>
        <tr>
          <td>CO{index+1}</td>
          <td>{description.description}</td>
          <td>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editCourseObjective(description.id)}/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteCourseObjective(description.id)}/>
          </td>
        </tr>
        
        
    </>
  )
}
