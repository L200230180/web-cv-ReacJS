import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div className="cv-section projects">
      <h2>💻 Proyek</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3>{project.title} ({project.role})</h3>
            <p><strong>Stack:</strong> {project.stack.join(', ')}</p>
            <p>{project.description}</p>
            {project.link && (
              <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                  Lihat Proyek
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;