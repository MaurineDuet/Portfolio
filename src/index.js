//Imports basiques React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter} from 'react-router-dom'

//Imports des pages
import Landing from './pages/landing'
import Main from './pages/main'
import FormationProjects from './pages/phone/phone_formation_projects'
import PersoProjects from './pages/phone/phone_perso_projects'
import Cv from './pages/cv'
/* 
import MainPhone from './pages/phone/phone_main' */
import NotesPhone from './pages/phone/phone_notes'
/* import CvPhone from './pages/phone/phone_cv' */
import CvWork from './pages/phone/phone_work_xp'
import CvEducation from './pages/phone/phone_education_xp'
import CvStats from './pages/phone/phone_stats'

import Error from './pages/error'

import LoadingTest from './pages/loading_test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename=''>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        
        <Route path="/main" element={<Main />}></Route>
{/*         <Route path="/mainphone" element={<MainPhone />}></Route> */}
        <Route path="/phonenotes" element={<NotesPhone />}></Route>
        <Route path="/formationprojects" element={<FormationProjects />}></Route>
        <Route path="/persoprojects" element={<PersoProjects />}></Route>

        <Route path="/cv" element={<Cv />}></Route>
        {/* <Route path="/cvphone" element={<CvPhone />}></Route> */}
        <Route path="/cvwork" element={<CvWork />}></Route>
        <Route path="/cveducation" element={<CvEducation />}></Route>
        <Route path="/cvstats" element={<CvStats />}></Route>

        <Route path="/loading" element={<LoadingTest />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);