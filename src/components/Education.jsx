import React from 'react';

const Education = ({ education }) => {
  return (
    <div className="cv-section education">
      <h2>🎓 Riwayat Pendidikan</h2>
      <ul>
        {education.map((edu) => (
          <li key={edu.id} className="education-item">
            <h3>{edu.degree}</h3>
            <p><strong>Institusi:</strong> {edu.institution}</p>
            <p><strong>Tahun:</strong> {edu.years}</p>
            <p>{edu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;