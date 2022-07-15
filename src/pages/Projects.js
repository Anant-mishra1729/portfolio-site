import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Anant Mishra's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <h1>Projects</h1>
          </h2>
          <p>
            A selection of projects based on Computer Vision and Deep learning
          </p>
          <p>Note : Some image are from Google Images</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
