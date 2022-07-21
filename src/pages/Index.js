import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../components/Contact/ContactIcons';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Anant Mishra's personal website."}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <h1>Hey There! I&apos;m Anant</h1>
          </h2>
          <p>
            {' '}
            This is my online portfolio. I&apos;m currently living in Vrindavan
            India... a place like no other. I&apos;m interested in AI and Data
            Science, feel free to contact me.
          </p>
        </div>
      </header>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>,{' '}
        <Link to="/projects">projects</Link>, view{' '}
        <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Index;
