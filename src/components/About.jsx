import React from 'react'

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
            {//<img src="myimage.jpg" alt="Manivannan Ramasamy" className="bio-image" />
            }
            <div className="bio-image"></div>
            <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus nulla at ullam, deserunt officia recusandae provident totam minima fuga delectus soluta nemo rem fugit eius et minus earum ad.</p>
            </div>

            <div className="job job-1">
                <h3>
                    123 workshop
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore perferendis debitis animi adipisci deserunt sint omnis earum reiciendis velit.
                </p>
            </div>

            <div className="job job-2">
                <h3>
                    123 workshop
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore perferendis debitis animi adipisci deserunt sint omnis earum reiciendis velit.
                </p>
            </div>

            <div className="job job-3">
                <h3>
                    123 workshop
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempore perferendis debitis animi adipisci deserunt sint omnis earum reiciendis velit.
                </p>
            </div>
        </div>
        </main> 
        </div>
    )
}

export default About
