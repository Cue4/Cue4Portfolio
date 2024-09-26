import Project from './Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', link: 'https://github.com/project1', image: '/project1.png' },
   
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
