import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anant Mishra</h2>
        <p>
          <a href="mailto:amishra1577@gmail.com">amishra1577@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Anant. I like building things. I am pursuing my
        bachelor&apos;s in Computer Science from{' '}
        <a href="https://www.thapar.edu/">Thapar University, Punjab</a>.
      </p>
    </section>

    <section id="footer">
      <p className="copyright">
        &copy; <Link to="/">Anant Mishra</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
