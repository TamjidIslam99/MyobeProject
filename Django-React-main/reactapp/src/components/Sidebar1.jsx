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
                   <Link to='/' className="nav-link element">
                       <span>Home</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/mission' className="nav-link">
                       <span>Mission</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/vision' className="nav-link">
                       <span>Vision</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/curriculum' class="nav-link">
                       <span>Curriculum</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/syllabus' className="nav-link">
                       <span>Syllabus</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/peo' className="nav-link">
                       <span>Program Educational Objectives (PEO)</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/peomapmission' className="nav-link">
                       <span>Mapping Of PEO and Mission</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/plo' className="nav-link">
                       <span>Program Learning Outcomes (PLO)</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/plomappeo' className="nav-link">
                       <span>Mapping Of PLO and PEO</span>
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to='/addcourse' className="nav-link">
                       <span>Courses</span>
                   </Link>
               </li>

           </ul>
           <Button className="btn btn-danger logout">Logout</Button>
       </div>
   </Fragment>
  )
}
