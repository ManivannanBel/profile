import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Work() {
    return (
        <div>
        <main id="about">
        <h1 className="lg-heading">
          My <span className="text-secondary">work</span>
        </h1>
        <h2 className="sm-heading">
            Check out some of my works...
        </h2>
        <div className="projects">
            <div className="item">
                <a>
                    <img src="" alt="project"/>
                </a>
                <a href="" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src="" alt="project"/>
                </a>
                <a href="" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src="" alt="project"/>
                </a>
                <a href="" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src="" alt="project"/>
                </a>
                <a href="" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src="" alt="project"/>
                </a>
                <a href="" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
        </div>
        </main> 
        </div>
    )
}

export default Work
