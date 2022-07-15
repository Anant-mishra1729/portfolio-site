import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main title="Stats" description="Some statistics about Anant Mishra">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <h1>Stats</h1>
          </h2>
        </div>
      </header>
      <Personal />
      <div>
        <h3>Github stats</h3>
        <img
          src="https://github.com/Anant-mishra1729/Anant-mishra1729/raw/main/profile-3d-contrib/profile-green-animate.svg"
          alt="Anant-mishra1729"
        />
      </div>

      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
