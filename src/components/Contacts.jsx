import React from 'react'

function Contacts() {
    return (
        <div>
        <main id="about">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">me</span>
        </h1>
        <h2 className="sm-heading">
            To reach me...
        </h2>
        <div className="boxes">
           <div>
                <span className="text-secondary">Email: </span>
                manivannan.belfazt@gmail.com   
            </div> 
            
            <div>
                <span className="text-secondary">Address: </span>
                Bangalore, India   
            </div> 
        </div>
        </main> 
        </div>
    )
}

export default Contacts
