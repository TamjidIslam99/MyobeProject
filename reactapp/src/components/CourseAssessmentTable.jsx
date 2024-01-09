import React from 'react'
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

const CourseAssessmentTable = () => {
  return (
    <div className='Wrapper' id='courseassessment'>
          <div className='row'>
               <div className='col-4 Heading1'>
                    <p>Curriculum: (2019-2020) - (2023-2024)</p>
                    <p>Program: 3rd Year 1st Semester 2019-2020</p>
                    <p>Course: CSE-356</p>
               </div>
               <div className='col-4 Heading2'>
                    <h2>Course Assessment</h2>
               </div>
               <div className='col-4 Heading3'>
                    <img src={logo} alt="Logo" />
               </div>
          </div>
        
       <table className='table table-bordered text-center table-hover border-dark'>
            <thead>
                <tr>
                    <th rowSpan={2}>Blooms Category</th>
                    <th colSpan={3}>CIE - Continuous Internal Evaluation</th>
                    <th rowSpan={2}>Final Examination</th>
                </tr>
                <tr >
                     
                    <th>Fest/Quiz</th>
                    <th>Assignment</th>
                    <th>External Perticipation</th>
                </tr>
                    
            </thead>
            <tbody>

                <tr >
                     <th >Remember</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Understand</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Apply</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Analyze</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Evaluate</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Creare</th>
                
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>
                <tr >
                     <th >Total</th>
                
                     <td colSpan={3}><input type="number" className='form-control'/></td>
                     <td><input type="number" className='form-control'/></td>
                </tr>

            
            </tbody>
        </table>
        <button type='button' className='btn btn-success mb-5'>Save</button>
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/ilo'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link to='/bookreference'>
                <button type='submit' className='form-btn btn'>Next</button>
              </Link>
              
            </div>
        </div>
    </div>
  )
}

export default CourseAssessmentTable