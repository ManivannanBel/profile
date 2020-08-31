import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import algorithmVizualiserImg from '.\\img\\algo.png';
import zombieImg from '.\\img\\zombie.png';
import cliImg from '.\\img\\cli.png';
import projectManagementToolImg from '.\\img\\kanban.png';
import urlShortenerImg from '.\\img\\url-short.jpg';
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
                <a className=" tooltip">
                <span class="tooltiptext">This is a Virtual Reality game where you can take a small walk in natural environment. Take a small walk in the environment to get rid of your stress and free your mind. Enjoy the birds chirping in 3D sound.</span>
                    <img src='https://lh3.googleusercontent.com/Yczftu_uP28xxg46b9zcR3guLQGR2XXzUvHktTqFNSBqDzr2qjF-kHYRoqXmKxQkXfU=w720-h310-rw' alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Walk in Nature VR</h4>
                <h5>VR Android game</h5>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.WalkinnatureVR" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a className="btn-dark not-allowed">
                <div className="tooltip">
                <span class="tooltiptext">Source code not available</span>
                
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github</div>
                </a>
            </div>

        <div className="item">
                <a className=" tooltip">
                <span class="tooltiptext">This cargo delivery truck game is full of thrill and adventure to take heavy cargo from and deliver it to their destination.</span>
                    <img src='https://lh3.googleusercontent.com/gmShubQ60xAY8rQWOKBW7CiOcrfsxHoyMOxDXei1I98cJj0cQKY73d5AP-Xk5L_mI1zk=s180-rw' alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Extreme mountain trucker</h4>
                <h5>Android game</h5>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.BelfaZt.extrememountaintrucking" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a className="btn-dark not-allowed">
                <div className="tooltip">
                <span class="tooltiptext">Source code not available</span>
                
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github</div>
                </a>
            </div>

        <div className="item">
                <a className=" tooltip">
                <span class="tooltiptext">This game is made for educational purpose with some challenging levels and to spread the awareness to cross the roads in real life very carefully.</span>
                    <img src='https://lh3.googleusercontent.com/ReLOIGH38OLwD0iOR9izljoq35nY7aNdsLES6mMn1MQHt31eZhhyVEb5k_ddokAB9Wck=w1366-h608-rw' alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Cross the road in VR</h4>
                <h5>VR Android game</h5>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.BelfaZT.CrosstheroadinVR" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a className="btn-dark not-allowed">
                <div className="tooltip">
                <span class="tooltiptext">Source code not available</span>
                
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github</div>
                </a>
            </div>

        <div className="item">
                <a className=" tooltip">
                <span class="tooltiptext">This is a URL shortening service built with Node.js for restfull services, MongoDB for storage and React.js and redux for frontend</span>
                    <img src={urlShortenerImg} alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Kut-ty The URL Shortener</h4>
                <h5>React.js, Redux, Node.js, MongoDB</h5>
                </div>
                <a href="https://kut-ty.web.app/" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="https://github.com/ManivannanBel/URL-shortener" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>
            
        <div className="item">
                <a className=" tooltip">
                <span class="tooltiptext">This is a Personal Project Management tool built using java spring boot and MySQL as backend and React.js and Redux in the frontend</span>
                    <img src={projectManagementToolImg} alt="project"/>
                </a>
                <div className="nameholder">
                <h4>Project Management Tool</h4>
                <h5>Java Spring Boot, MySQL, React.Js, Redux</h5>
                </div>
                <a href="https://my-project-management-tool.herokuapp.com" className="btn-light">
                    <FontAwesomeIcon icon={faEye} size="1x" />Project
                </a>
                <a href="https://github.com/ManivannanBel/project-management-system" className="btn-dark">
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github
                </a>
            </div>

            <div className="item">
                <a className=" tooltip">
                <span class="tooltiptext">A react project for visualizing path finding algorithms</span>
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
                <a className="tooltip">
                <span class="tooltiptext">It is an Infinite truck racing game where the player has to travel as much distance as possible to get the highest score with increasing difficulty</span>
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
            
                <a className="tooltip">
                <span class="tooltiptext">They are comming! is a survival game for android where the player has survive the zombie apocalypse</span>
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
            
                <a className=" tooltip">
                <span class="tooltiptext">Monitoring System for Loco running staff for Railway Department, Southern Division, Salem</span>
                    <img src={cliImg} alt="project"/>
                </a>
                <div className="nameholder">
                <h4>CLI Monitoring Portal</h4>
                <h5>Web and Android Application</h5>
                </div>
                <a className="btn-light not-allowed">
                <div className="tooltip">
                <span class="tooltiptext">Source and Preview not available due to confidentiality</span>
                
                    <FontAwesomeIcon icon={faEye} size="1x" />Project</div> 
                </a>
                <a className="btn-dark not-allowed">
                <div className="tooltip">
                <span class="tooltiptext">Source and Preview not available due to confidentiality</span>
                
                    <FontAwesomeIcon icon={faGithub} size="1x" />Github</div>
                </a>
                
            </div>
        </div>
        </main> 
        </div>
    )
}

export default Work
