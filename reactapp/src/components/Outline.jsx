import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export const Outline = ({description, index, deleteOutline, editOutline}) => {
  return (
    <>
        <tr>
          <td>M{index+1}</td>
          <td>{description.description}</td>
          <td>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editOutline(description.id)}/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteOutline(description.id)}/>
          </td>
        </tr>
        
        
    </>
  )
}
