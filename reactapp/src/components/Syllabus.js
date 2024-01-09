import React, {Fragment, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import BscSemester from "./BSCSemester";
import BscYear from "./BSCYear";
import SyllabusTable from "./SyllabusTable";
import logo from "./logos/JU_logo2.png";
import {Link} from "react-router-dom";

function Syllabus(props) {

    const [selectedOption,setSelectedOption] = useState('');
    const [program,setProgram] = useState('');
    const [year,setYear] = useState('');
    const [semesterValue,setSemesterValue] = useState('');
    const [yearValue,setYearValue] = useState('');
    const [isVisible,setIsVisible] = useState(true);

    const showTable=()=>{
        setIsVisible(true);
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

    const yearHandle = (e)=>{
        setYear(e.target.value);
    }

    return (
        <Fragment>
            <Container className="Wrapper">
                <div className='row'>
                    <div className='col-4 Heading1'>
                        <p>Curriculum: (2019-2020) - (2023-2024)</p>
                    </div>
                    <div className='col-4 Heading2'>
                        <h2 >Curriculum</h2>
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
                            <Form.Select onChange={yearHandle} value={year} >
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
                        (selectedOption !== "" && program !== "" && year !== "") ? (
                            selectedOption==="year" ?(
                                <Fragment>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0">
                                        <BscYear yearChange={yearChange} yearValue={yearValue}/>
                                    </Col>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0"> </Col>
                                    <Link to="/peo"><Button className="form-btn btn" onClick={showTable}>Add</Button></Link>
                                </Fragment>
                            )  : (
                                <Fragment>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0">
                                        <BscYear yearChange={yearChange} yearValue={yearValue} />
                                    </Col>
                                    <Col md={6} lg={6} sm={6} className="p-0 m-0">
                                        <BscSemester semesterValue={semesterValue} semesterChange={semesterChange} />
                                    </Col>
                                    <Link to="/peo"><Button className="form-btn btn" onClick={showTable}>Add</Button></Link>
                                </Fragment>
                            )
                        ) : (
                            <Col>
                                <p>Please select all options.</p>
                            </Col>
                        )
                    }
                </Row>

            </Container>
            {
                isVisible ?
                    <SyllabusTable
                        selectedOption={selectedOption}
                        program={program}
                        year={year}
                        semesterValue={semesterValue}
                        yearValue={yearValue}
                    />:""

            }
        </Fragment>
    );
}

export default Syllabus;