import './App.css';
import '../src/assets/Custom.css'
import { MissionPage } from './pages/MissionPage';
import { VisionPage } from './pages/VisionPage';
import { PeoPage } from './pages/PeoPage';
import { PloPage } from './pages/PloPage';
import { IloPage } from './pages/IloPage';
import { CourseInfoPage } from './pages/CourseInfoPage';
import { PeoMapMissionPage } from './pages/PeoMapMissionPage';
import { PloMapPeoPage } from './pages/PloMapPeoPage';
import { CloMapPloPage } from './pages/CloMapPloPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import PeoContext from "./components/Context/PeoContext";
import MissionContext from './components/Context/MissionContext';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import PloContext from "./components/Context/PloContext";

import {CoursePage} from './pages/CoursePage'
import CurriculumPage from './pages/CurriculumPage';

import CloPloRePage from "./pages/CloPloRePage";
import { CloPage } from './pages/CloPage';
import { BookReferencePage } from './pages/BookReferencePage';
import { CourseObjectivePage } from './pages/CourseObjectivePage';
import { CourseAssessmentPage } from './pages/CourseAssessmentPage';
import SyllabusPage from "./pages/SyllabusPage";
import CloContext from "./components/Context/CloContext";
import {Col, Container, Row} from "react-bootstrap";
import {Sidebar} from "./components/Sidebar";
import {OutlineTablePage} from "./pages/OutlineTablePage";
import IloContext from './components/Context/IloContext';
import MissionWrapper from './components/MissionWrapper';
import DataContext from './components/Context/DataContext';


function App() {

    // PEOS FUNCTIONAL WORK HERE //
    const [peos, setPeos] = useState([])
    

    // MISSIONS WORK HERE//
    const [missions, setMissions] = useState([])
    


    // PLOS WORK HERE //
    const [plos, setPlos] = useState([])
    

    // CLOs work here

    const [clos, setClos] = useState([])

    const [knowledges, setKnowledges] = useState([]);

    const [skills, setSkills] = useState([]);

    const [attitudes, setAttitudes] = useState([]);

    const [upCurriculums, setUpCurriculums] = useState({});
    const [upSyllabuses, setUpSyllabuses] = useState({});
    const [upCourses, setUpCourses] = useState({});
    

  return (

    <BrowserRouter>
      <DataContext.Provider value={{upCurriculums, setUpCurriculums, upSyllabuses, setUpSyllabuses, upCourses, setUpCourses}}>
      <MissionContext.Provider value={{missions, setMissions}}>
        <PeoContext.Provider value={{peos, setPeos}}>
         <PloContext.Provider value={{plos,setPlos}}>
             <CloContext.Provider value={{clos,setClos}}>
                <IloContext.Provider value={{knowledges, setKnowledges, skills, setSkills, attitudes, setAttitudes}}>
                 <Container>
                     <Row>
                        <Col md={2} sm={2} lg={2}>
                            <div className="navbar">
                                <div className="scrollable-content">
                                    <Sidebar/>
                                </div>
                            </div>
                        </Col>
                         <Col md={10} sm={10} lg={10}>
                             <Row className="fixMargin">
                                 <Routes>
                                     <Route path='/' element={<HomePage/>}/>
                                     <Route path='/mission' element={<MissionWrapper/>}/>
                                     <Route path='/vision' element={<VisionPage/>}/>
                                     <Route path='/curriculum' element={<CurriculumPage/>}/>
                                     <Route path='/syllabus' element={<SyllabusPage/>}/>
                                     <Route path='/peo' element={<PeoPage/>}/>
                                     <Route path='/plo' element={<PloPage/>}/>
                                     <Route path='/ilo' element={<IloPage/>}/>
                                     <Route path='/courseinfo' element={<CourseInfoPage/>}/>
                                     <Route path='/peomapmission' element={<PeoMapMissionPage/>}/>
                                     <Route path='/plomappeo' element={<PloMapPeoPage/>}/>
                                     <Route path='/clomapplo' element={<CloMapPloPage/>}/>

                                     <Route path='/addcourse'  element={<CoursePage/>}/>
                                     <Route path='/curri'  element={<CurriculumPage/>}/>

                                     <Route path='/cloPloReasoning' element={<CloPloRePage/>}/>
                                     <Route path='/clo' element={<CloPage/>}/>
                                     <Route path='/bookreference' element={<BookReferencePage/>}/>
                                     <Route path='/courseobjective' element={<CourseObjectivePage/>}/>

                                     <Route path='/courseassessment' element={<CourseAssessmentPage/>}/>
                                     
                                     <Route path='/course' element={<CoursePage/>}/>
                                     <Route path='/outline'   element={<OutlineTablePage/>}/>

                                 </Routes>
                             </Row>
                        </Col>
                     </Row>
                 </Container>
                </IloContext.Provider>
             </CloContext.Provider>
         </PloContext.Provider>
        </PeoContext.Provider>
        </MissionContext.Provider>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;