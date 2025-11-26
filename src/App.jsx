import React from 'react';
import dataMahasiswa from './data/dataMahasiswa.json';

function App() {
  const { profile, skills, experiences } = dataMahasiswa;

  return (
    <div className="app-container">
      {/* Cek apakah data terimpor */}
      <h1>Project CV - {profile.full_name}</h1>
    </div>
  );
}

export default App;