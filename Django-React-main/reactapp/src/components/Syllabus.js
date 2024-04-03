import React, {Fragment, useState, useEffect, useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import Form from "react-bootstrap/Form";
import BscSemester from "./BSCSemester";
import BscYear from "./BSCYear";
import SyllabusTable from "./SyllabusTable";
import logo from "./logos/JU_logo2.png";
import {Link} from "react-router-dom";
import DataContext from './Context/DataContext';
import axios from 'axios';

function Syllabus(props) {

    const {upCurriculums,setUpCurriculums} = useContext(DataContext);
    const {upSyllabuses,setUpSyllabuses} = useContext(DataContext);
    const [syllabuses, setSyllabuses] = useState([]);
    const [selectedOption,setSelectedOption] = useState('');
    const [program,setProgram] = useState('');
    const [session,setSession] = useState('');
    const [semesterValue,setSemesterValue] = useState('');
    const [yearValue,setYearValue] = useState('');

    useEffect(() => {
        if (upCurriculums.id) {
            console.log(upCurriculums);
            axios.get(`http://127.0.0.1:8000/api/syllabus/?upCurriculum=${upCurriculums.id}`)
                .then((res) => {
                    if (res.status === 200) {
                        if (res.data.length > 0) {
                            setSyllabuses(res.data);
                        }
                    } else {
                        console.error("Failed to fetch data from the server");
                    }
                })
                .catch(() => {
                    console.error("Something went wrong");
                });
        }
    }, [upCurriculums.id]);
    
      
    const addSyllabus = () => {
        console.log(upCurriculums);
        const requestData = {
            upCurriculum: parseInt(upCurriculums.id, 10), 
            program: program,
            selectedOption: selectedOption, 
            yearValue: yearValue, 
            semesterValue: semesterValue, 
            session: session
        };
    
        axios
        .post('http://127.0.0.1:8000/api/syllabus/', requestData)
        .then((response) => {
            // Handle the response if needed
            console.log(response.data);
            setSyllabuses(prevSyllabuses => [...prevSyllabuses, response.data]);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const deleteSyllabus = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/syllabus/${id}/`)
            .then(() => {
                const newSyllabus = syllabuses.filter(t => {
                    return t.id !== id
                });
                setSyllabuses(newSyllabus);
            }).catch(() => {
                alert("Something went wrong");
            })
      }


    const yearChange = (e)=>{
        setYearValue(e.target.value);
    }

    const semesterChange = (e)=>{
        setSemesterValue(e.target.value);
    }

    const handleChange = (e)=>{
        setSelectedOption(e.target.value);
    }
    const programHandle = (e)=>{
        setProgram(e.target.value);
    }

    const sessionHandle = (e)=>{
        setSession(e.target.value);
    }

    return (
        <Fragment>
            <Container className="Wrapper">
                <div className='row'>
                    <div className='col-4 Heading1'>
                        <p>Curriculum: {upCurriculums.starting} - {upCurriculums.ending}</p>
                    </div>
                    <div className='col-4 Heading2'>
                        <h2 >Programs</h2>
                    </div>
                    <div className='col-4 Heading3'>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <Row>
                    <Col>
                        <div>
                            <label className="pe-5 pb-2 input-label" htmlFor="">Program: </label> <input
                            name="pg"
                            className="form-check-input"
                            id="pg1"
                            type="radio"
                            value="bsc"
                            onChange={programHandle}
                            checked={program==="bsc"}
                            />
                            <label className="pe-5 pb-2" htmlFor="pg1">B.SC </label>
                            <input
                                className="form-check-input"
                                name="pg"
                                id="pg2"
                                type="radio"
                                value="msc"
                                onChange={programHandle}
                                checked={program==="msc"}
                            />
                            <label className="pe-5 pb-2" htmlFor="pg2"> M.SC</label>
                        </div>
                        <div>
                            <label className="pe-5 pb-2 input-label" htmlFor="">System    :</label>
                            <input
                            className="form-check-input"
                            name="sys"
                            id="sys1"
                            type="radio"
                            value="semester"
                            onChange={handleChange}
                            checked={selectedOption==="semester"}
                            />
                            <label className="pe-5 pb-2" htmlFor="sys1">Semester</label>
                            <input
                                className="form-check-input"
                                name="sys"
                                id="sys2"
                                type="radio"
                                value="year"
                                onChange={handleChange}
                                checked={selectedOption==="year"}
                            />
                            <label className="pe-5 pb-2" htmlFor="sys2">Year</label>
                        </div>
                        <div>
                            <label htmlFor="" className='input-label'>Starting Session</label>
                            <Form.Select onChange={sessionHandle} value={session} >
                                <option value="">choose session</option>
                                <option value="2018-2019">2018-2019</option>
                                <option value="2019-2020">2019-2020</option>
                                <option value="2020-2021">2020-2021</option>
                                <option value="2021-2022">2021-2022</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        (selectedOption !== "" && program !== "" && session !== "") ? (
                            selectedOption==="year" ?(
                                <Fragment>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0">
                                        <BscYear yearChange={yearChange} yearValue={yearValue}/>
                                    </Col>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0"> </Col>
                                    
                                    <Button className="form-btn btn" onClick={addSyllabus}>Add</Button>
                                </Fragment>
                            )  : (
                                <Fragment>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0">
                                        <BscYear yearChange={yearChange} yearValue={yearValue} />
                                    </Col>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0">
                                        <BscSemester semesterValue={semesterValue} semesterChange={semesterChange} />
                                    </Col>
                                    <Button className="form-btn btn" onClick={addSyllabus}>Add</Button>
                                </Fragment>
                            )
                        ) : (
                            <Col>
                                <p>Please select all options.</p>
                            </Col>
                        )
                    }
                </Row>
                <Row className='pt-5'>
                    <table className='table table-bordered text-center table-hover border-dark'>
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>System</th>
                            <th>Starting Session</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {syllabuses.map((syllabus, index) => (
                                <tr key={index} className='nav-item'>
                                    <td>
                                        <Link to='/peo' className='nav-link' onClick={() => setUpSyllabuses(syllabus)}>
                                            <span>{syllabus.program}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/peo' className='nav-link' onClick={() => setUpSyllabuses(syllabus)}>
                                            <span>{syllabus.selectedOption}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/peo' className='nav-link' onClick={() => setUpSyllabuses(syllabus)}>
                                            <span>{syllabus.session}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/peo' className='nav-link' onClick={() => setUpSyllabuses(syllabus)}>
                                            <span>{syllabus.yearValue}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/peo' className='nav-link' onClick={() => setUpSyllabuses(syllabus)}>
                                            <span>{syllabus.semesterValue}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteSyllabus(syllabus.id)}/>
                                    </td>
                                    
                                </tr>
                            ))
                            
                        }
                    </tbody>
                    </table>
                </Row>
                
            </Container>
        </Fragment>
    );
}

export default Syllabus;