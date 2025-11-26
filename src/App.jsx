import React from 'react';
import Profile from './components/Profile'; 

function App() {
  const { profile, skills, experiences } = dataMahasiswa;

  return (
    <div className="app-container">
      {/* 1. Profile Section */}
      <Profile profile={profile} /> 

      {/* 2. Skills Section */}

      {/* 3. Experiences Section */}
    </div>
  );
}
// ...