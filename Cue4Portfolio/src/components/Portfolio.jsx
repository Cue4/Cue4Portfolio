import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', link: 'https://github.com/mkeeney42/Film-Fanatics.git', image: 'placeholder' },
    { title: 'Project 2', link: 'https://github.com/valyastriz/daily-echo', image: 'placeholder'}
   
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;
