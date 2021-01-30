import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <main id="home">
        <h1 className="lg-heading">
          Manivannan <span className="text-secondary">Ramasamy</span>
        </h1>
        <h2 className="sm-heading">
          Computer Programmer, Game Developer & Fullstack Developer
        </h2>
        <div className="icons">
          <a href="https://github.com/ManivannanBel">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/manivannan28/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </main>
    )
}

export default Home
