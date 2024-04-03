import React from 'react'
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'

export const Course = () => {
    return (
        <div className='Wrapper'>
            <div className='row'>
                <div className='col-4 Heading1'>
                    <p>Curriculum: (2019-2020) - (2023-2024)</p>
                    <p>Program: 3rd Year 1st Semester 2019-2020</p>
                </div>
                <div className='col-4 Heading2'>
                    <h2>Courses</h2>
                </div>
                <div className='col-4 Heading3'>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className='Course-btn'>
                <Link to='/courseinfo'>
                    <button type='button' className='form-btn btn pt-3 pb-3'>Add Course</button>
                </Link>

            </div>
            <table className='table table-bordered text-center align-middle table-hover border-dark'>
                <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Title</th>
                </tr>

                </thead>
                <tbody>
                <tr>
                    <td>CSE 303</td>
                    <td>Computer Graphics</td>

                </tr>
                <tr>
                    <td>CSE 305</td>
                    <td>Computational Geometry</td>
                </tr>
                <tr>
                    <td>CSE 307</td>
                    <td>Computer Architechture and Organization</td>
                </tr>
                </tbody>
            </table>
            <Link to='/plomappeo'>
                <button type='submit' className='btn btn-warning'>Back</button>
            </Link>
        </div>
    )
}