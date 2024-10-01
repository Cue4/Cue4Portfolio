import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <a href={project.link}>
        <img src={project.image} alt={project.title} />
      </a>
    </div>
  );
}

export default Project;
