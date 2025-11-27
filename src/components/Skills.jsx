import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="cv-section skills">
      <h2>✨ Keterampilan</h2>
      <ul>
        {skills.map((skill) => ( 
          <li key={skill.id} className="skill-item">
            <p>
              <img src={skill.icon_url} alt={skill.name} style={{ width: '20px', height: '20px', marginRight: '10px', verticalAlign: 'middle' }} />
              <strong>{skill.name}</strong> ({skill.level}) {skill.is_main && <span>| **MAIN**</span>}
            </p>
            {skill.years_of_experience && <small>Pengalaman: {skill.years_of_experience} tahun</small>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;