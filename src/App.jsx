import React from 'react';
import Profile from './components/Profile';
import Skills from './components/Skills'; 
import dataMahasiswa from './data/dataMahasiswa.json'; 
// ...

function App() {
  const { profile, skills, experiences } = dataMahasiswa;

  return (
    <div className="app-container">
      <Profile profile={profile} /> 
    
      <Skills skills={skills} /> 
      
      {/* Footer sederhana */}
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: 'small', color: '#666' }}>
        Aplikasi CV Mahasiswa dengan ReactJS.
      </p>
    </div>
  );
}

export default App;