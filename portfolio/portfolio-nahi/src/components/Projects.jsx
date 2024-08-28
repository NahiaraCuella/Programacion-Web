import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Proyectos</h2>
      <div className="project">
        <h3>Proyecto 1</h3>
        <p>Este proyecto es una cartelera de peliculas</p>
        <img src="/cartelera.png" alt="foto" className="tamaño"/>
        <a href ="http://127.0.0.1:5500/peliculas/index.html"> Ver proyecto</a>
      </div>
      <div className="project">
        <h3>Proyecto 2</h3>
        <p>nose.</p>
      </div>
    </section>
  );
};

export default Projects;
