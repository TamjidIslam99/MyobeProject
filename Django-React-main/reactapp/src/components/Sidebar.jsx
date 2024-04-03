import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from "react-bootstrap";

export const Sidebar = () => {
    const [showHome, setShowHome] = useState(true);
    const [showMission, setShowMission] = useState(true);
    const [showVision, setShowVision] = useState(true);
    const [showCurriculum, setShowCurriculum] = useState(true);
    const [showProgram, setShowProgram] = useState(true);
    const [showPeo, setShowPeo] = useState(true);
    const [showPeoMapMission, setShowPeoMapMission] = useState(true);
    const [showPlo, setShowPlo] = useState(true);
    const [showPloMapPeo, setShowPloMapPeo] = useState(true);
    const [showCourse, setShowCourse] = useState(true);
    const [showCourseInfo, setShowCourseInfo] = useState(true);
    const [showCourseObjective, setShowCourseObjective] = useState(true);
    const [showClo, setShowClo] = useState(true);
    const [showCloMapPlo, setShowCloMapPlo] = useState(true);
    const [showCloPloReasoning, setShowCloPloReasoning] = useState(true);
    const [showIlo, setShowIlo] = useState(true);
    const [showCourseContentOutline, setShowCourseContentOutline] = useState(true);
    const [showCourseAssessment, setShowCourseAssessment] = useState(true);
    const [showBookReference, setShowBookReference] = useState(true);
    
  return (
   <Fragment>
       <div className="nameMain">
           <div className='infoDiv'>
               <img src="https://juniv.edu/storage/image/teacher/e5Og72xM6ziVhQm05xvu9rFVWOUTnsTih451EfgP.jpg" alt=""/>
               <h4>Dr. Abu Sayed Md. Mostafizur Rahaman</h4>
               <p>Professor</p>
               <p>Department Of Computer Science And Engineering</p>
           </div>
           <hr/>
           <ul className="" id="menu">
                {showHome && (
                    <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <span>Home</span>
                    </Link>
                    </li>
                )}
                {showMission && (
                    <li className="nav-item">
                    <Link to='/mission' className="nav-link">
                        <span>Mission</span>
                    </Link>
                    </li>
                )}
                {showVision && (
                    <li className="nav-item">
                    <Link to='/vision' className="nav-link">
                        <span>Vision</span>
                    </Link>
                    </li>
                )}
                {showCurriculum && (
                    <li className="nav-item">
                    <Link to='/curriculum' class="nav-link">
                        <span>Curriculum</span>
                    </Link>
                    </li>
                )}
               
                {showProgram && (
                    <li className="nav-item">
                    <Link to='/syllabus' className="nav-link">
                        <span>Program</span>
                    </Link>
                    </li>
                )}

                {showPeo && (
                    <li className="nav-item">
                    <Link to='/peo' className="nav-link">
                        <span>Program Educational Objectives (PEO)</span>
                    </Link>
                    </li>
                )}
                {showPeoMapMission && (
                     <li className="nav-item">
                     <Link to='/peomapmission' className="nav-link">
                         <span>Mapping Of PEO and Mission</span>
                     </Link>
                    </li>
                )}
                {showPlo && (
                    <li className="nav-item">
                    <Link to='/plo' className="nav-link">
                        <span>Program Learning Outcomes (PLO)</span>
                    </Link>
                    </li>
                )}

                {showPloMapPeo && (
                    <li className="nav-item">
                    <Link to='/plomappeo' className="nav-link">
                        <span>Mapping Of PLO and PEO</span>
                    </Link>
                    </li>
                )}

                {showCourse && (
                    <li className="nav-item">
                    <Link to='/course' className="nav-link">
                        <span>Courses</span>
                    </Link>
                    </li>
                )}

                {showCourseInfo && (
                    <li className="nav-item">
                    <Link to='/courseinfo' className="nav-link">
                        <span>Course Information</span>
                    </Link>
                    </li>
                )}

                {showCourseObjective && (
                    <li className="nav-item">
                    <Link to='/courseobjective' className="nav-link">
                        <span>Course Objectives</span>
                    </Link>
                    </li>
                )}

                {showClo && (
                    <li className="nav-item">
                    <Link to='/clo' className="nav-link">
                        <span>Course Learning Outcomes (CLO)</span>
                    </Link>
                    </li>
                )}

                {showCloMapPlo && (
                    <li className="nav-item">
                    <Link to='/clomapplo' className="nav-link">
                       <span>CLO-PLO Correlation Matrix</span>
                    </Link>
                    </li>
                )}

                {showCloPloReasoning && (
                    <li className="nav-item">
                    <Link to='/cloPloReasoning' className="nav-link">
                        <span>CLO & PLO Reasoning</span>
                    </Link>
                    </li>
                )}

                {showIlo && (
                    <li className="nav-item">
                    <Link to='/ilo' className="nav-link">
                        <span>Intended Learning Outcomes (ILO)</span>
                    </Link>
                    </li>
                )}

                {showCourseContentOutline && (
                    <li className="nav-item">
                    <Link to='/outline' className="nav-link">
                        <span>Course Content Outline</span>
                    </Link>
                    </li>
                )}
                {showCourseAssessment && (
                    <li className="nav-item">
                    <Link to='/courseassessment' className="nav-link">
                        <span>Course Assessment</span>
                    </Link>
                    </li>
                )}

                {showBookReference && (
                    <li className="nav-item">
                    <Link to='/bookreference' className="nav-link">
                        <span>Reference Books</span>
                    </Link>
                    </li>
                )}  

           </ul>
           <Button className="btn btn-danger logout">Logout</Button>
       </div>
   </Fragment>
  )
}
