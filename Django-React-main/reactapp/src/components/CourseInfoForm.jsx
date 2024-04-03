import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export const CourseInfoForm = ({addMission}) => {
  const [courseInfos, setCourseInfos] = useState({});
  const [course_code,setCourseCode]=useState("")
  const [title,setTitle]=useState("")
  const [credit,setCredit]=useState("")
  const [prerequisites,setPrerequisites]=useState("")
  const [type,setType]=useState("")
  const [contact_hours,setContactHours]=useState("")
  const [total_lectures,setTotalLectures]=useState("")
  const [class_tests,setClassTests]=useState("")

  const [final_exam,setFinalExam]=useState("")
  const [faculty,setFaculty]=useState("")
  const [rationale,setRationale]=useState("")
  const fetchCourseData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cinfo/');
      if (response.data.length > 0) {
        setCourseInfos(response.data[0]);
        const data = response.data[0];
          setCourseCode(data.course_code);
          setTitle(data.title);
          setCredit(data.credit);
          setPrerequisites(data.prerequisites);
          setType(data.type);
          setContactHours(data.contact_hours);
          setTotalLectures(data.total_lectures);
          setClassTests(data.class_tests);
          setFinalExam(data.final_exam);
          setFaculty(data.faculty);
          setRationale(data.rationale);
        setIsUpdating(true); // Set the flag to indicate updating existing data
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    fetchCourseData();
  }, []);

  const handleSubmit = async (e) => {

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
    e.preventDefault();

    try {
      if (isUpdating) {

        const response = await axios.put(`http://127.0.0.1:8000/api/cinfo/${courseInfos.id}/`, requestData);
        console.log('Update Response:', response.data);
      } else {

        const response = await axios.post('http://127.0.0.1:8000/api/cinfo/', requestData);
        console.log('Create Response:', response.data);
        setIsUpdating(true); 
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const isComplete = () => {
    // Check if all required fields have values
    return (
      courseInfos.course_code &&
      courseInfos.credit &&
      courseInfos.title &&
      courseInfos.prerequisites &&
      courseInfos.type &&
      courseInfos.contact_hours &&
      courseInfos.total_lectures &&
      courseInfos.class_tests &&
      courseInfos.final_exam &&
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
              <input name='course_code' type="text" className='form-input form-control' value={course_code} onChange={(e) => setCourseCode(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Credit: </label>
              <input name='credit' type="text" className='form-input form-control' value={credit} onChange={(e) => setCredit(e.target.value)} required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Title: </label>
              <input name='title' type="text" className='form-input form-control' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Prerequisites: </label>
              <input name='prerequisites' type="text" className='form-input form-control' value={prerequisites}  onChange={(e) => setPrerequisites(e.target.value)}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Type: </label>
              <input name='type' type="text" className='form-input form-control'   value={type} onChange={(e) => setType(e.target.value)} required/>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label input-label'>Contact Hours: </label>
              <input name='contact_hours' type="number" className='form-input form-control' value={contact_hours} onChange={(e) => setContactHours(e.target.value)}  required/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>Total Lectures: </label>
              <input name='total_lectures' type="number" className='form-input form-control' value={total_lectures} onChange={(e) => setTotalLectures(e.target.value)} required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>No. of Class Test: </label>
              <input name='class_tests' type="number" className='form-input form-control'  value={class_tests} onChange={(e) => setClassTests(e.target.value)} required/>
            </div>
            <div className='col-md-4'>
              <label htmlFor="" className='form-label input-label'>Final Examination: </label>
              <input name='final_exam' type="number" className='form-input form-control' value={final_exam} onChange={(e) => setFinalExam(e.target.value)} required/>
            </div>
          </div>
          
          <div>
            <label htmlFor="" className='form-label input-label'>Faculty: </label>
            <input name='faculty' type="text" className='form-input form-control'   value={faculty } onChange={(e) => setFaculty(e.target.value)} required/>
          </div>
          <div>
            <label htmlfor="" className='form-label input-label'>Rationale:</label>
            <textarea name='rationale' class="form-input form-control" rows="3" value={rationale }onChange={(e) => setRationale(e.target.value)} required></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-success mb-5' >Save</button>
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
