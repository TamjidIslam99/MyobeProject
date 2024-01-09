import React, { useContext , useState} from 'react'
import {Container, Row} from "react-bootstrap";
import CloContext from './Context/CloContext';
import IloContext from './Context/IloContext';


const Coursecontoutline = () => {

  const {clos} = useContext(CloContext);
  const {knowledges,skills,attitudes} = useContext(IloContext);

  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [selectedClo, setSelectedClo] = useState('');
  const [selectedKnowledge, setSelectedKnowledge] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selectedAttitude, setSelectedAttitude] = useState([]);
  const [faceToFaceHours, setFaceToFaceHours] = useState('');
  const [lectureHours, setLectureHours] = useState('');
  const [exerciseHours, setExerciseHours] = useState('');
  const [practicalHours, setPracticalHours] = useState('');
  const [othersHours, setOthersHours] = useState('');
  const [nonFaceToFaceHours, setNonFaceToFaceHours] = useState('');
  const [independentLearningHours, setIndependentLearningHours] = useState('');
  const [totalSLTHours, setTotalSLTHours] = useState('');

  return (
      <Container>
        <Row>
            <div>
            
            <form className='ObeForm'>
              <label  className='input-label'>Heading:</label>
              <input type="email" className="form-control form-input" placeholder="Enter Topic Heading" value={heading} onChange={(e) => (setHeading(e.target.value))} required/>
              <label className='input-label'>Discription:</label>
              <input type="password" className="form-control form-input" placeholder="Enter Topic Description" value={description} onChange={(e) => (setDescription(e.target.value))} required/>
              <fieldset className="form-group">
                <div className="row ">
                  <legend className="col-form-label col-sm-2 pt-0 pb-3 input-label">Included CLOS:</legend>
                  <div className="col-sm-10 checkbox-container">
                    {
                      clos.map((clo, index) => (
                        <>
                          <input className="form-check-input" type="checkbox" id={`cloCheck${index}`} value={heading} onChange={(e) => (setHeading(e.target.value))} required/>
                          <label className="form-check-label pe-5 pb-2" htmlFor={`cloCheck${index}`}> CLO{index+1}
                          </label>
                        </>
                        
                      ))
                    }
                    
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="" className='input-label'>Included ILOs:</label>
                  <legend className="col-form-label col-sm-2 pt-0 input-label">Knowledge:</legend>
                  <div className="col-sm-10 checkbox-container">

                    {
                      knowledges.map((knowledge, index) => (
                        <>
                          <input className="form-check-input" type="checkbox" id={`ilo1Check${index}`}/>
                          <label className="form-check-label pe-5 pb-2" htmlFor={`ilo1Check${index}`}> a{index+1}
                          </label>
                        </>
                        
                      ))
                    }

                  </div>

                </div>
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0 input-label">Skill:</legend>
                  <div className="col-sm-10 checkbox-container">
                    {
                      skills.map((skill, index) => (
                        <>
                          <input className="form-check-input" type="checkbox" id={`ilo2Check${index}`}/>
                          <label className="form-check-label pe-5 pb-2" htmlFor={`ilo2Check${index}`}> b{index+1}
                          </label>
                        </>
                        
                      ))
                    }

                  </div>

                </div>
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0 input-label">Attitude:</legend>
                  <div className="col-sm-10 checkbox-container">

                    {
                      attitudes.map((attitude, index) => (
                        <>
                          <input className="form-check-input" type="checkbox" id={`ilo3Check${index}`}/>
                          <label className="form-check-label pe-5 pb-2" htmlFor={`ilo3Check${index}`}> c{index+1}
                          </label>
                        </>
                        
                      ))
                    }

                  </div>

                </div>
              </fieldset>
              <label htmlFor="inputEmail3" className='input-label'>Face To Face (Hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>
              <label htmlFor="inputPassword3" className='input-label'>Lecture (Hours):</label>
              <input type="number" className="form-control form-input" id="inputPassword3" placeholder="Write Here"/>
              <label htmlFor="inputEmail3" className='input-label'>Exercise (hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>
              <label htmlFor="inputEmail3" className='input-label'>Practical (Hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>
              <label htmlFor="inputEmail3" className='input-label'>Others(hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>
              <label htmlFor="inputEmail3" className='input-label'>Non Face to Face (Hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>

              <label htmlFor="inputEmail3" className='input-label'>Independent Learning (Hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>
              <label htmlFor="inputEmail3" className='input-label'>Total SLT (Hours):</label>
              <input type="number" className="form-control form-input" id="inputEmail3" placeholder="Write Here"/>
              <button type="submit" className="btn btn-success">Save</button>
            </form>
          </div>
        </Row>
      </Container>
  )
}

export default Coursecontoutline

