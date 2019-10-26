import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import '../css/main.css';

function Dashboard() {
  return (
    <React.Fragment>
      <Header />
      <main id="home">
        <h1 className="lg-heading">
          Manivannan <span className="text-secondary">Ramasamy</span>
        </h1>
        <h2 className="sm-heading">
          Programmer, Game Developer, Web Developer & Entreprenuer
        </h2>
        <div className="icons">
          <a>
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a>
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;
