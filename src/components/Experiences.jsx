import React from 'react';

const formatDate = (dateString) => {
  if (!dateString) return 'Saat Ini';
  const options = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const Experiences = ({ experiences }) => {
  const sortedExperiences = experiences.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
  return (
    <div className="cv-section experiences">
      <h2>💼 Pengalaman</h2>
      <ul>
        {sortedExperiences.map((exp) => (
          <li key={exp.id} className="experience-item">
            <h3>{exp.title} ({exp.experience_type})</h3>
            <p><strong>Organisasi:</strong> {exp.organization}</p>
            <p>
              <strong>Periode:</strong> {formatDate(exp.start_date)} – {formatDate(exp.end_date)}
            </p>
            <p>{exp.description}</p>
            {exp.technologies && exp.technologies.length > 0 && (
              <p>
                <strong>Teknologi:</strong> {exp.technologies.join(', ')}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;