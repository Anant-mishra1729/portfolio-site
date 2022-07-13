import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Anant Mishra and mldangelo.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
      <div>
        <h3>Github stats</h3>
        {/* <img src="https://github-readme-stats.vercel.app/api?username=Anant-mishra1729&show_icons=true&theme=swift" alt="Anant-mishra1729" width="49%" /> */}
        <img src="https://raw.githubusercontent.com/Anant-mishra1729/Anant-mishra1729/59cbab9c5dd086086b6eb3da3d85d0bf510b06fa/profile-3d-contrib/profile-green-animate.svg" alt="Anant-mishra1729" />
      </div>

      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
