import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "react-bootstrap";

export const Sidebar = () => {
  return (
   <Fragment>
       <div className="nameMain">
           <div className='infoDiv'>
               <img src="https://juniv.edu/storage/image/teacher/e5Og72xM6ziVhQm05xvu9rFVWOUTnsTih451EfgP.jpg" alt=""/>
               <h4>Dr. Abu Sayed Md. Mostafizur Rahaman, B.Sc(JU), MSc.(Germany) PhD(JU)</h4>
               <p>Professor</p>
               <p>Department Of Computer Science And Engineering</p>
           </div>
           <hr/>
           <ul className="" id="menu">
               <li className="nav-item">
                   <Link to='/courseinfo' className="nav-link">
                       <span>Course Information</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/courseobjective' className="nav-link">
                       <span>Course Objectives</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/clo' className="nav-link">
                       <span>Course Learning Outcomes (CLO)</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/clomapplo' className="nav-link">
                       <span>CLO-PLO Correlation Matrix</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/cloPloReasoning' className="nav-link">
                       <span>CLO & PLO Reasoning</span>
                   </Link>
               </li>


               <li className="nav-item">
                   <Link to='/ilo' className="nav-link">
                       <span>Intended Learning Outcomes (ILO)</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/outline' className="nav-link">
                       <span>Course Content Outline</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/courseassessment' className="nav-link">
                       <span>Course Assessment</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/bookreference' className="nav-link">
                       <span>Reference Books</span>
                   </Link>
               </li>

           </ul>
           <Button className="btn btn-danger logout">Logout</Button>
       </div>
   </Fragment>
  )
}
