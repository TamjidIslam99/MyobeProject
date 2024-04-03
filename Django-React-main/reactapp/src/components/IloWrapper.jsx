import React, {useContext, useState} from 'react'
import { KnowledgeWrapper } from './KnowldedgeWrapper'
import { SkillWrapper } from './SkillWrapper'
import { AttitudeWrapper } from './AttitudeWrapper'
import logo from './logos/JU_logo2.png';
import {Link} from 'react-router-dom'
import IloContext from './Context/IloContext';

export const IloWrapper = () => {

  const {knowledges,skills,attitudes} = useContext(IloContext);
  
  const isComplete = () => {
    return (knowledges.length !== 0) && (skills.length !== 0) && (attitudes.length !== 0);
  };

  return (
    <div className='Wrapper' id='ilo'>
        <div className='row'>
          <div className='col-4 Heading1'>
            <p>Curriculum: (2019-2020) - (2023-2024)</p>
            <p>Program: 3rd Year 1st Semester 2019-2020</p>
            <p>Course: CSE-356</p>
          </div>
          <div className='col-4 Heading2'>
            <h2 >Intended Learning Outcomes (ILO)</h2>
          </div>
          <div className='col-4 Heading3'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
          <KnowledgeWrapper/>
          <SkillWrapper/>
          <AttitudeWrapper/>
        
        <div className='row'>
            <div className='col-6 text-start'>
              <Link to='/cloploreasoning'>
                <button type='submit' className='btn btn-warning'>Back</button>
              </Link>
              
            </div>
            <div className='col-6 text-end'>
              <Link
                  to={isComplete() ? '/courseassessment' : '#'}
                  onClick={(e) => {
                      if (!isComplete()) {
                          e.preventDefault();
                          alert("Please add at least one ILO of each type.");
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
