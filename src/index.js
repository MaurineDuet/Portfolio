//Imports basiques React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Imports des pages
import Landing from './pages/landing'
import Main from './pages/main'
import MainPhone from './pages/phone_main'
import FormationProjects from './pages/phone_formation_projects'
import PersoProjects from './pages/phone_perso_projects'
import Cv from './pages/cv'
import CvPhone from './pages/phone_cv'
import Error from './pages/error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/mainphone" element={<MainPhone />}></Route>
        <Route path="/formationprojects" element={<FormationProjects />}></Route>
        <Route path="/persoprojects" element={<PersoProjects />}></Route>
        <Route path="/cv" element={<Cv />}></Route>
        <Route path="/cvphone" element={<CvPhone />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);