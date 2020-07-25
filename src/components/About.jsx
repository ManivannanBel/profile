import React from 'react'
import aboutphoto from ".\\img\\aboutimage.jpg";

function About() {
    return (
        <div>
        <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">me</span>
        </h1>
        <h2 className="sm-heading">
            Let me tell you something about me...
        </h2>
        <div className="about-info">
            <img src={aboutphoto} alt="Manivannan Ramasamy" className="bio-image" />
            
            <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p align="justify">I am a computer programmer, a self taught game developer and a fullstack developer with a great programming knowledge and capability to learn new things. Welcome to my portfolio site and have a look at my works and previous projects.</p>
            </div>

            <div className="job job-1">
                <h3>
                    Founder of BelfaZt games
                </h3>
                <p>
                    2018 - Present
                </p>
            </div>

            <div className="job job-2">
                <h3>
                    Bachelor of Computer Science and Engineering 2015 - 2019
                </h3>
                <p>
                    8.3 CGPA
                </p>
                <p>
                    Sona College of Technology, Salem.
                </p>
            </div>

            <div className="job job-3">
                <h3>
                    Higher Secondary Certificate
                </h3>
                <p>93%</p>
                <p>
                    Saratha Matriculation School, Gobi.
                </p>
            </div>

            <div className="job job-4">
                <h3>
                    Secondary School Leaving Certificate
                </h3>
                <p>94%</p>
                <p>
                    Saratha Matriculation School, Gobi. 
                </p>
            </div>
        </div>
        </main> 
        </div>
    )
}

export default About
