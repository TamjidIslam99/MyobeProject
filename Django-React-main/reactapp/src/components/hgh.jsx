import React from 'react'
import { CourseInfoForm } from './CourseInfoForm'
import logo from './logos/JU_logo2.png';
import axios from 'axios';
import { useEffect,useState } from 'react';
export const CourseInfoWrapper = () => {

  const [courseinfos, setCourseinfos] = useState([])
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/cinfo/")
        .then((res) => {
          if (res.status === 200) {
            if (res.data.length > 0) {
              setCourseinfos(res.data);
            }
          } else {
            console.error("Failed to fetch data from the server");
          }
        })
        .catch(() => {
          console.error("Something went wrong");
        });
    }, []);

    const addCinfo = (course_code, credit, title, prerequisites, type, contact_hours, total_lectures, class_tests, final_exam, faculty, rationale) => {
    
      const requestData = {
        course_code: course_code,
      credit: credit,
      title: title,
      prerequisites: prerequisites,
      type: type,
      contact_hours: contact_hours,
      total_lectures: total_lectures,
      class_tests: class_tests,
      final_exam: final_exam,
      faculty: faculty,
      rationale: rationale,
        isEditing: false
      };
      alert(course_code)
      
      axios
        .post('http://127.0.0.1:8000/api/cinfo/', requestData)
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
          setCourseinfos(prevcinfo => [...prevcinfo, response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        <CourseInfoForm addCinfo={addCinfo}/>
        
    </div>
  )
}
