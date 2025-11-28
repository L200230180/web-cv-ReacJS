import React from 'react';
import dataMahasiswa from './data/dataMahasiswa.json'; 
import Profile from './components/Profile';
import Skills from './components/Skills'; 
import Experiences from './components/Experiences';
import Education from './components/Education'; 
import Projects from './components/Projects'; 

function App() {
  const { profile, skills, experiences, education, projects } = dataMahasiswa;
  const currentYear = new Date().getFullYear();

  return (
    <div id="root">
      <Profile profile={profile} /> 
      <Education education={education} />
      <Skills skills={skills} /> 
      <Experiences experiences={experiences} />
      <Projects projects={projects} />

      <footer className="mt-10 p-6 text-center bg-gray-100 border-t-4 border-blue-500 shadow-inner rounded-b-lg">
        <p className="text-gray-700 font-semibold mb-2">
          Aplikasi CV Mahasiswa: {profile.nama}
        </p>
        <p className="text-sm text-gray-500">
          Dibuat dengan semangat menggunakan ReactJS.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          &copy; {currentYear} | Hak Cipta.
        </p>
      </footer>
    </div>
  );
}

export default App;