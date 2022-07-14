import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anant Mishra</h2>
        <p><a href="mailto:amishra1577@gmail.com">amishra1577@gmail.com</a></p>
      </header>
      {/* <ContactIcons /> */}
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Anant. I like building things.
        I am a currently pursuing my B.E./BTech from <a href="https://www.thapar.edu/">Thapar University, Punjab</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Resume</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; <Link to="/">Anant Mishra</Link>.</p>
    </section>
  </section>
);

export default SideBar;
