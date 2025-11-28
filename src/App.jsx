import React from 'react';

import dataMahasiswa from './data/dataMahasiswa.json'; 

import Profile from './components/Profile';
import Skills from './components/Skills'; 
import Experiences from './components/Experiences';
import Education from './components/Education'; 
import Projects from './components/Projects'; 

function App() {
  const { profile, skills, experiences, education, projects } = dataMahasiswa;

  return (
    <div id="root">
      <Profile profile={profile} /> 
      <Education education={education} />
      <Skills skills={skills} /> 
      <Experiences experiences={experiences} />
      <Projects projects={projects} />

      {/* Footer Aplikasi */}
      <p className="footer-text">
        Aplikasi CV Mahasiswa dengan ReactJS.
      </p>
    </div>
  );
}

export default App;