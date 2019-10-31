import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import algorithmVizualiserImg from '.\\img\\algo.png';
import zombieImg from '.\\img\\zombie.png';
import cliImg from '.\\img\\cli.png';
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
                    <img src="https://lh3.googleusercontent.com/h5ud-z9pshy6l__SULIF61tTNuMHxXsqpjsYVlSkGwLywNyxaJgTp_NPE29McyuAgw=w720-h310-rw" alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Burning tires: Thunder Runner</h4>
                <h5>Android Game</h5>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.BelfaZt.Runner" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src={algorithmVizualiserImg} alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Algorithm Visualizer</h4>
                <h5>React App</h5>
                </div>
                <a href="https://manivannanbel.github.io/algorithm-visualizer/" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="https://github.com/ManivannanBel/algorithm-visualizer" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src={zombieImg} alt="project"/>
                </a>
                <div className="nameholder">
                <h4>They are comming</h4>
                <h5>Android Zombie Game</h5>
                </div>
                <a href="" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            <div className="item">
                <a>
                    <img src={cliImg} alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Monitoring System for Loco running staff for Railway Department, Southern Division, Salem</h4>
                <h5>Web and Android Application</h5>
                </div>
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
                <div className="nameholder">
                <h4>Burning tires: Thunder Runner</h4>
                <h5>Android Game</h5>
                </div>
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
