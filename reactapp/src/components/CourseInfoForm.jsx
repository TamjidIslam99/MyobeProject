import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const CourseInfoForm = ({addMission}) => {
  const [courseInfos, setCourseInfos] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect values from input fields
    const courseCodeValue = e.target.elements.courseCode.value;
    const creditValue = e.target.elements.credit.value;
    const titleValue = e.target.elements.title.value;
    const prerequisitesValue = e.target.elements.prerequisites.value;
    const typeValue = e.target.elements.type.value;
    const contactHoursValue = e.target.elements.contactHours.value;
    const totalLecturesValue = e.target.elements.totalLectures.value;
    const classTestsValue = e.target.elements.classTests.value;
    const finalExamValue = e.target.elements.finalExam.value;
    const facultyValue = e.target.elements.faculty.value;
    const rationaleValue = e.target.elements.rationale.value;

    // Create an object with the collected values
    const updatedCourseInfos = {
      courseCode: courseCodeValue,
      credit: creditValue,
      title: titleValue,
      prerequisites: prerequisitesValue,
      type: typeValue,
      contactHours: contactHoursValue,
      totalLectures: totalLecturesValue,
      classTests: classTestsValue,
      finalExam: finalExamValue,
      faculty: facultyValue,
      rationale: rationaleValue
    };

    // Update the courseInfos state
    setCourseInfos(updatedCourseInfos);
    console.log(courseInfos);
    // You can also pass the updatedCourseInfos to a parent component or perform any other necessary actions here.
  };
  const isComplete = () => {
    // Check if all required fields have values
    return (
      courseInfos.courseCode &&
      courseInfos.credit &&
      courseInfos.title &&
      courseInfos.prerequisites &&
      courseInfos.type &&
      courseInfos.contactHours &&
      courseInfos.totalLectures &&
      courseInfos.classTests &&
      courseInfos.finalExam &&
      courseInfos.faculty &&
      courseInfos.rationale
    );
  };


  return (
    <div>
        <form action="submit" className='CourseInfoForm container-fluid' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Course Code: </label>
              <input name='courseCode' type="text" className='form-input form-control' required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Credit: </label>
              <input name='credit' type="text" className='form-input form-control' required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Title: </label>
              <input name='title' type="text" className='form-input form-control' required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Prerequisites: </label>
              <input name='prerequisites' type="text" className='form-input form-control' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Type: </label>
              <input name='type' type="text" className='form-input form-control'  required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Contact Hours: </label>
              <input name='contactHours' type="number" className='form-input form-control'  required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>Total Lectures: </label>
              <input name='totalLectures' type="number" className='form-input form-control'  required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>No. of Class Test: </label>
              <input name='classTests' type="number" className='form-input form-control'  required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>Final Examination: </label>
              <input name='finalExam' type="number" className='form-input form-control'  required/>
            </div>
          </div>
          
          <div>
            <label htmlFor="" className='form-label input-label'>Faculty: </label>
            <input name='faculty' type="text" className='form-input form-control'  required/>
          </div>
          <div>
            <label htmlfor="" className='form-label input-label'>Rationale:</label>
            <textarea name='rationale' class="form-input form-control" rows="3"  required></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-success mb-5' onSubmit={handleSubmit}>Save</button>
          </div>
        </form>
        <div className='row form-group '>
            <div className='col-6 text-start'>
              <Link to='/course'>
                <button type='button' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link
                  to={isComplete() ? '/courseobjective' : '#'}
                  onClick={(e) => {
                      if (!isComplete()) {
                          e.preventDefault();
                          alert("Please fill up all the required fields and save");
                      }
                  }}
              >
                  <button
                      type='button'
                      className={`form-btn btn ${isComplete() ? '' : 'disabled'}`}
                  >
                      Next
                  </button>
              </Link>
              
            </div>
        </div>
        
    </div>
  )
}
