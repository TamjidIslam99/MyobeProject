import React from 'react'
import './Table.css'
import OutlineForm from "./OutlineForm";
import {Container} from "react-bootstrap";
import logo from './logos/JU_logo2.png';

export const OutlineTable = () => {
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
            <OutlineForm/>
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
                <tr>
                    <td rowSpan={3}>1</td>
                    <td rowSpan={3} colSpan={12}>A. Introduction: Concept of public health: Public Health as a specialized field of knowledge; Interdisciplinary stands within the framework of medical science.</td>
                    <td rowSpan={3} colSpan={4}>CLO101.1<br></br>CLO101.2</td>
                    <td rowSpan={3} colSpan={4}>a1, a2<br></br>c1,c2</td>
                    <td rowSpan={3} >2</td>
                    <td rowSpan={3} >2</td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3}  colSpan={2}> </td>
                    <td rowSpan={3}  colSpan={4}>4</td>
                    <td rowSpan={3}  colSpan={2}>8</td>
                </tr>
                <tr> </tr>
                <tr> </tr>
                <tr>
                    <td rowSpan={3}>2</td>
                    <td rowSpan={3} colSpan={12}>B. Concepts of Public Health, Public Health and Anthropos:
                        Concepts of public, community, composition, structure and
                        function of society; Locus of Anthropos in the kingdom animalia</td>
                    <td rowSpan={3} colSpan={4}>CLO101.1<br/>CLO101.2</td>
                    <td rowSpan={3} colSpan={4}>a1, a2<br/>b1<br/>c2,c5</td>
                    <td rowSpan={3} >2</td>
                    <td rowSpan={3} >2</td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3}  colSpan={2}> </td>
                    <td rowSpan={3}  colSpan={4}>4</td>
                    <td rowSpan={3}  colSpan={2}>8</td>
                </tr>
                <tr> </tr>
                <tr> </tr>
                <tr>
                    <td rowSpan={3}>3</td>
                    <td rowSpan={3} colSpan={12}>C. Historical trajectory: Origin of Public Health and its growth
                        (Antiquity- to contemporary)..</td>
                    <td rowSpan={3} colSpan={4}>CLO101.1<br/>CLO101.2</td>
                    <td rowSpan={3} colSpan={4}>a2,a<br/>b1,b2<br/>c2,c3,c4</td>
                    <td rowSpan={3} >4</td>
                    <td rowSpan={3} >4</td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3}  colSpan={2}> </td>
                    <td rowSpan={3}  colSpan={4}>8</td>
                    <td rowSpan={3}  colSpan={2}>16</td>
                </tr>
                <tr> </tr>
                <tr> </tr>
                <tr>
                    <td rowSpan={3}>4</td>
                    <td rowSpan={3} colSpan={12}>D. Thoughts and contexts of preventive medicine: Theory of
                        disease causation; Public Health Concepts- health, disease,
                        illness, sickness, medical pluralism, and health-seeking behavior.</td>
                    <td rowSpan={3} colSpan={4}>CLO101.2<br/>CLO101.3<br/>CLO101.4</td>
                    <td rowSpan={3} colSpan={4}>a2,a4,a5<br/>b3,b5<br/>c3,c4,c5</td>
                    <td rowSpan={3} >3</td>
                    <td rowSpan={3} >3</td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3}  colSpan={2}> </td>
                    <td rowSpan={3}  colSpan={4}>6</td>
                    <td rowSpan={3}  colSpan={2}>12</td>
                </tr>
                <tr> </tr>
                <tr> </tr>
                <tr>
                    <td rowSpan={3}>5</td>
                    <td rowSpan={3} colSpan={12}>E. Concepts of health: Biological, ecological, psychiatry and
                        holistic approach; WHO definition and its criticism; Modern
                        concept of health.</td>
                    <td rowSpan={3} colSpan={4}>CLO101.2<br/>CLO101.3<br/>CLO101.4<br/>CLO101.5</td>
                    <td rowSpan={3} colSpan={4}>a3,a4,a5,a6<br/>b2,b6<br/>c3,c5,c6</td>
                    <td rowSpan={3} >3</td>
                    <td rowSpan={3} >3</td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3}  colSpan={2}> </td>
                    <td rowSpan={3}  colSpan={4}>6</td>
                    <td rowSpan={3}  colSpan={2}>12</td>
                </tr>
                <tr> </tr>
                <tr> </tr>
                <tr>
                    <td rowSpan={3}>6</td>
                    <td rowSpan={3} colSpan={12}>F. Perspective of preventive medicine: Cultural system, stressor, CLO1101.3
                        immunity, adaptation and human evolution.</td>
                    <td rowSpan={3} colSpan={4}>CLO101.2<br/>CLO101.3<br></br>CLO101.4<br/>CLO101.5</td>
                    <td rowSpan={3} colSpan={4}>a3,a4<br/>b3,b5<br/>c2,c4,c5</td>
                    <td rowSpan={3} >4</td>
                    <td rowSpan={3} >4</td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3} > </td>
                    <td rowSpan={3}  colSpan={2}> </td>
                    <td rowSpan={3}  colSpan={4}>8</td>
                    <td rowSpan={3}  colSpan={2}>16</td>
                </tr>
                <tr> </tr>
                <tr> </tr>
                <tr>
                    <td rowSpan={3}>7</td>
                    <td rowSpan={3} colSpan={12}>G. Public health challenges in 21st century: Climate change,
                        disaster management and public health; Primary Health Care
                        (PHC); Millennium Development Goal (MDG); Universal Health
                        Coverage (UHC); Sustainable Development Goal (SDG); Nutrition
                        and public Health.</td>
                    <td rowSpan={3} colSpan={4}>CLO101.2<br></br>CLO101.3<br></br>CLO101.4</td>
                    <td rowSpan={3} colSpan={4}>a2,a6<br></br>b2,b5,b6<br></br>c3,c4,c6</td>
                    <td rowSpan={3} >3</td>
                    <td rowSpan={3} >3</td>
                    <td rowSpan={3} ></td>
                    <td rowSpan={3} ></td>
                    <td rowSpan={3}  colSpan={2}></td>
                    <td rowSpan={3}  colSpan={4}>6</td>
                    <td rowSpan={3}  colSpan={2}>12</td>
                </tr>
                <tr></tr>
                <tr></tr>


                <tr>
                    <td rowSpan={2}></td>
                    <td rowSpan={2} colSpan={12}></td>
                    <td rowSpan={2} colSpan={4}></td>
                    <td rowSpan={2} colSpan={4}></td>
                    <td rowSpan={2} >21</td>
                    <td rowSpan={2} >21</td>
                    <td rowSpan={2} ></td>
                    <td rowSpan={2} ></td>
                    <td rowSpan={2}  colSpan={2}></td>
                    <td rowSpan={2}  colSpan={4}>42</td>
                    <td rowSpan={2}  colSpan={2}>84</td>
                </tr>
                <tr></tr>
                <tr>
                    <th colSpan={20}>Assessment</th>
                    <th>Percentage</th>
                    <th colSpan={5}>F2F</th>
                    <th colSpan={5}>Non-F2F</th>
                    <th>STL</th>
                </tr>
                <tr>
                    <td colSpan={20}>Attendance</td>
                    <td>10%</td>
                    <td colSpan={5}>-</td>
                    <td colSpan={5}>-</td>
                    <th>-</th>
                </tr>
                <tr>
                    <td colSpan={20}>Tutorials/Assignments</td>
                    <td>input</td>
                    <td colSpan={5}>3</td>
                    <td colSpan={5}>15</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td colSpan={20}>Final Exam</td>
                    <td>70%</td>
                    <td colSpan={5}>3</td>
                    <td colSpan={5}>15</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td colSpan={21}></td>
                    <td colSpan={10}>Total SLT</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td colSpan={32}>L = Lecture, E = Exercise, P = Practical, O = Others, F2F = Face to Face, Non-F2F = Non Face to Face</td>
                </tr>
                </tbody>

            </table>
        </div>
    </Container>
  )
}

export default OutlineTable
