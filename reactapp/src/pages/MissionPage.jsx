import React from 'react'
import { MissionWrapper } from '../components/MissionWrapper'
import { useState,useEffect } from 'react';
import axios from 'axios';
export const MissionPage = () => {
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    axios.get("/api/mission/")
      .then((res) => {
        setMissions(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])
  return (
    <div className='container-fluid g-0 Page'>
      <MissionWrapper mission={missions} setMissions={setMissions}/>
    </div>
  )
}
