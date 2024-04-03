import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export const CourseInfoForm = ({addCinfo}) => {
  const [course_code,setCourseCode]=useState({})
  const [title,setTitle]=useState({})
  const [credit,setCredit]=useState({})
  const [prerequisites,setPrerequisites]=useState({})
  const [type,setType]=useState({})
  const [contact_hours,setContactHours]=useState({})
  const [total_lectures,setTotalLectures]=useState({})
  const [class_tests,setClassTests]=useState({})

  const [final_exam,setFinalExam]=useState({})
  const [faculty,setFaculty]=useState({})
  const [rationale,setRationale]=useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    addCinfo(course_code, credit, title, prerequisites, type, contact_hours, total_lectures, class_tests, final_exam, faculty, rationale);
    
}
  


  return (
    <div>
        <form action="submit" className='CourseInfoForm container-fluid' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Course Code: </label>
              <input name='course_code' type="text" className='form-input form-control' value={course_code} onChange={(e) => setCourseCode(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Credit: </label>
              <input name='credit' type="text" className='form-input form-control' value={credit} onChange={(e) => setCredit(e.target.value)} required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Title: </label>
              <input name='title' type="text" className='form-input form-control' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Prerequisites: </label>
              <input name='prerequisites' type="text" className='form-input form-control' value={prerequisites}  onChange={(e) => setPrerequisites(e.target.value)}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Type: </label>
              <input name='type' type="text" className='form-input form-control'   value={type} onChange={(e) => setType(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Contact Hours: </label>
              <input name='contact_hours' type="number" className='form-input form-control' value={contact_hours} onChange={(e) => setContactHours(e.target.value)}  required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>Total Lectures: </label>
              <input name='total_lectures' type="number" className='form-input form-control' value={total_lectures} onChange={(e) => setTotalLectures(e.target.value)} required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>No. of Class Test: </label>
              <input name='class_tests' type="number" className='form-input form-control'  value={class_tests} onChange={(e) => setClassTests(e.target.value)} required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>Final Examination: </label>
              <input name='final_exam' type="number" className='form-input form-control' value={final_exam} onChange={(e) => setFinalExam(e.target.value)} required/>
            </div>
          </div>
          
          <div>
            <label htmlFor="" className='form-label input-label'>Faculty: </label>
            <input name='faculty' type="text" className='form-input form-control'   value={faculty } onChange={(e) => setFaculty(e.target.value)} required/>
          </div>
          <div>
            <label htmlfor="" className='form-label input-label'>Rationale:</label>
            <textarea name='rationale' class="form-input form-control" rows="3" value={rationale }onChange={(e) => setRationale(e.target.value)} required></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-success mb-5' >Save</button>
          </div>
        </form>
        
    </div>
  )
}
