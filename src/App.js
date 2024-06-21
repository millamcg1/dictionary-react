import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "./logo.png";
import "./styles.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>

      <main>
        <Dictionary />
      </main>

      <footer className="footer py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-md-4 col-sm-12 text-center">
              <div className="logo-container">
                <img src={logo} className="logo rounded-circle" alt="Logo" />
              </div>
            </div>

            {/* About Me Section */}
            <div className="col-md-4 col-sm-12 text-center">
              <div className="about-me">
                <h3 className="text-white"> 👩🏽‍💻 About Me</h3>
                <p className="text-white">
                  Hi, I'm Camilla, a Brazilian web developer based in Northern
                  Ireland. I specialize in creating dynamic and responsive
                  websites using HTML5, CSS3, JavaScript, React.js, and Python
                  🐍. My journey in web development started with a fascination
                  for the digital world's endless possibilities. 🌟 Beyond
                  coding, I'm passionate about learning and staying updated with
                  the latest web technologies. I thrive in dynamic environments
                  that foster innovation and creativity. Let's connect and code
                  together!
                </p>
              </div>
            </div>

            {/* Social Icons Section */}
            <div className="col-md-4 col-sm-12 text-center">
              <div className="social-icons">
                <a
                  href="https://github.com/millamcg1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link github"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/camilla-luna-mcgoldrick-7982b7303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link linkedin"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <hr className="text-white" />
          <div className="row">
            {/* Copyright Section */}
            <div className="col-md-6">
              <p className="text-white">
                © 2024 Luna Development. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
