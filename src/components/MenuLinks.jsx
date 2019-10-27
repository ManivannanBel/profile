import React from 'react'

function MenuLinks(props) {

    

    return (
        <li className="nav-item current" ref={homeItem} onClick={() => props.onMenuButtonClick()}>
              <Link to={props.link} className="nav-link">
                HOME
              </Link>
        </li>
    )
}

export default MenuLinks
