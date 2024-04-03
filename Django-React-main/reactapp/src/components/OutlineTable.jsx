import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import logo from './logos/JU_logo2.png';
import Coursecontoutline from "./Coursecontoutline";
import { Outline } from './Outline';
import axios from 'axios';

const OutlineTable = () => {
  const [outlines, setOutlines] = useState([]);
  const [allClos, setAllClos] = useState([]);
  const [allKnows, setAllKnows] = useState([]);
  const [allAtts, setAllAtts] = useState([]);
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/outline/")
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          setOutlines(res.data);
        } else {
          console.error("Failed to fetch outline data from the server");
        }
      })
      .catch(() => {
        console.error("Something went wrong while fetching outline data");
      });

    axios.get("http://127.0.0.1:8000/api/clo/")
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          setAllClos(res.data);
        } else {
          console.error("Failed to fetch CLO data from the server");
        }
      })
      .catch(() => {
        console.error("Something went wrong while fetching CLO data");
      });

    axios.get("http://127.0.0.1:8000/api/knowledge/")
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          setAllKnows(res.data);
        } else {
          console.error("Failed to fetch Knowledge data from the server");
        }
      })
      .catch(() => {
        console.error("Something went wrong while fetching Knowledge data");
      });

    axios.get("http://127.0.0.1:8000/api/attitude/")
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          setAllAtts(res.data);
        } else {
          console.error("Failed to fetch Attitude data from the server");
        }
      })
      .catch(() => {
        console.error("Something went wrong while fetching Attitude data");
      });

    axios.get("http://127.0.0.1:8000/api/skill/")
      .then((res) => {
        if (res.status === 200 && res.data.length > 0) {
          setAllSkills(res.data);
        } else {
          console.error("Failed to fetch Skill data from the server");
        }
      })
      .catch(() => {
        console.error("Something went wrong while fetching Skill data");
      });
  }, []);

  const addOutline = (heading, description,  nonfaceToface, lecture, exercise, practical, others, ilearn, totalSlt, selectedCLOs, selectedKnows, selectedAtts, selectedSkills) => {
    const requestData = {
      heading: heading,
      description: description,

      nonfaceToface: nonfaceToface,
      lecture: lecture,
      exercise: exercise,
      practical: practical,
      others: others,
      ilearn: ilearn,
      totalSlt: totalSlt,
    };

    axios.post('http://127.0.0.1:8000/api/outline/', requestData)
      .then((response) => {
        const outlineId = response.data.id;
        axios.post(`http://127.0.0.1:8000/api/outline/${outlineId}/clos/`, { clos: selectedCLOs })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error("Error adding CLOs to Outline:", err);
          });

        axios.post(`http://127.0.0.1:8000/api/outline/${outlineId}/knows/`, { knows: selectedKnows })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error("Error adding Knowledge to Outline:", err);
          });

        axios.post(`http://127.0.0.1:8000/api/outline/${outlineId}/atts/`, { atts: selectedAtts })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error("Error adding Attitudes to Outline:", err);
          });

        axios.post(`http://127.0.0.1:8000/api/outline/${outlineId}/skills/`, { skills: selectedSkills })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.error("Error adding Skills to Outline:", err);
          });

        setOutlines(prevoutline => [...prevoutline, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <Container className="Wrapper">
        <div>
            <div className='row'>
                <div className='col-4 Heading1'>
                <p>Curriculum: (2019-2020) - (2023-2024)</p>
                <p>Program: 3rd Year 1st Semester 2019-2020</p>
                <p>Course: CSE-356</p>
                </div>
                <div className='col-4 Heading2'>
                <h2 >Course Content Outline</h2>
                </div>
                <div className='col-4 Heading3'>
                <img src={logo} alt="Logo" />
                </div>
            </div>
            <Coursecontoutline addOutline={addOutline}  />
            <table  className='table table-bordered text-center border-dark table-hover bg-dark'  >
                <thead className="thead-dark">
                <tr>
                    <th rowSpan={5}>#</th>
                    <th colSpan={12} rowSpan={2}>Course Content Outline</th>
                    <th colSpan={4} rowSpan={5}>CLO</th>
                    <th colSpan={4} rowSpan={5}>ILO</th>
                    <th colSpan={12}>Teaching and Learning Activities</th>

                </tr>
                <tr>
                    <th colSpan={6}>Guided Learning</th>
                    <th colSpan={4} rowSpan={4}>Independent Learning(NF2F)</th>
                    <th colSpan={2} rowSpan={4}>Total SLT</th>
                </tr>

                <tr>
                    <th colSpan={4} rowSpan={2}>BMB 101</th>
                    <th colSpan={8} rowSpan={2}>Introductory Biochemistry</th>

                    <th colSpan={4} rowSpan={2}>F2F</th>
                    <th colSpan={2} rowSpan={2}>Non-F2F</th>
                </tr>
                <tr>
                </tr>
                <tr>
                    <th colSpan={12}>Topic</th>
                    <th >L</th>
                    <th >E</th>
                    <th >P</th>
                    <th >O</th>
                    <th colSpan={2} >NF2F</th>
                </tr>
                </thead>
                <tbody>
                
                {outlines.map((outline,index) => (
                
               
               // Inside the OutlineTable component where you render the Outline component
<Outline
                key={outline.id}
                description={outline}
                allClos={allClos}
                allKnows={allKnows}
                allAtts={allAtts}
                allSkills={allSkills}
                selectedCLOs={outline.clos}
                selectedKnows={outline.knows}
                selectedAtts={outline.atts}
                selectedSkills={outline.skills}
                index={index}
              />

         

                ))
               
                
            }
            
                </tbody>

            </table>
        </div>
    </Container>
  )
}

export default OutlineTable
