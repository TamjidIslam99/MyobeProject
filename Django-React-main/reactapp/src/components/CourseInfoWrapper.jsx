import React from 'react'
import { CourseInfoForm } from './CourseInfoForm'
import logo from './logos/JU_logo2.png';

export const CourseInfoWrapper = () => {
  return (
    <div className='Wrapper' id='courseinfo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Course Information</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <CourseInfoForm/>
        
    </div>
  )
}
