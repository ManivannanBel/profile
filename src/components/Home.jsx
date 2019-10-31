import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <main id="home">
        <h1 className="lg-heading">
          Manivannan <span className="text-secondary">Ramasamy</span>
        </h1>
        <h2 className="sm-heading">
          Programmer, Game Developer, Web Developer & Entreprenuer
        </h2>
        <div className="icons">
          <a href="https://github.com/ManivannanBel">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a href="https://www.facebook.com/manivannan.belfazt.9">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="https://www.instagram.com/manivannan_belfazt/">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>
      </main>
    )
}

export default Home