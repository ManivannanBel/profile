import React, {useState, useRef, useEffect} from "react";
import {Link} from 'react-router-dom';
import myimage from '.\\img\\myimage.jpg';

function Header() {
    
    const menuButton = useRef(null); 
    const menu = useRef(null);
    const menuNav = useRef(null);
    const menuBranding = useRef(null);
    const homeItem = useRef(null);
    const aboutItem = useRef(null);
    const workItem = useRef(null);
    const contactItem = useRef(null);

    const [showMenu, setShowMenu] = useState(false);
    const [previousButton, setPreviousButton] = useState(homeItem);

    useEffect(() => {
        
    }, [])

    const onMenuButtonClick = () => {
        //console.log(data)
        if(!showMenu){
            menuButton.current.classList.add('close');
            menu.current.classList.add('show');
            menuNav.current.classList.add('show');
            menuBranding.current.classList.add('show');
            homeItem.current.classList.add('show');
            aboutItem.current.classList.add('show');
            workItem.current.classList.add('show');
            contactItem.current.classList.add('show');
            setShowMenu(true);
        }else{
            menuButton.current.classList.remove('close');
            menu.current.classList.remove('show');
            menuNav.current.classList.remove('show');
            menuBranding.current.classList.remove('show');
            homeItem.current.classList.remove('show');
            aboutItem.current.classList.remove('show');
            workItem.current.classList.remove('show');
            contactItem.current.classList.remove('show');
            setShowMenu(false);
        }
    }

    const onHomeButtonClick = () => {
        previousButton.current.classList.remove('current');
        homeItem.current.classList.add('current');
        setPreviousButton(homeItem)
        document.body.classList.remove("hide");
        onMenuButtonClick();
    }

    const onAboutButtonClick = () => {
        previousButton.current.classList.remove('current');
        aboutItem.current.classList.add('current');
        setPreviousButton(aboutItem)
        document.body.classList.remove("hide");
        onMenuButtonClick();
    }

    const onWorkButtonClick = () => {
        previousButton.current.classList.remove('current');
        workItem.current.classList.add('current');
        setPreviousButton(workItem)
        document.body.classList.add("hide");
        onMenuButtonClick();
    }

    const onContactButtonClick = () => {
        previousButton.current.classList.remove('current');
        contactItem.current.classList.add('current');
        setPreviousButton(contactItem)
        document.body.classList.add("hide");
        onMenuButtonClick();
    }

  return (
    <React.Fragment>
      <header>
        <div className="menu-btn" ref={menuButton} onClick={() => onMenuButtonClick()}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu" ref={menu}>
          <div className="menu-branding" ref={menuBranding}>
            <img src={myimage} className="portrait"/>
          </div>
          <ul className="menu-nav" ref={menuNav}>
            <li className="nav-item current" ref={homeItem} onClick={() => onHomeButtonClick()}>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item" ref={aboutItem} onClick={() => onAboutButtonClick()}>
              <Link to="/about" className="nav-link">
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item" ref={workItem} >
              <Link to="/work" className="nav-link" onClick={() => onWorkButtonClick()}>
                MY WORK
              </Link>
            </li>
            <li className="nav-item" ref={contactItem}>
              <Link to="contact" className="nav-link" onClick={() => onContactButtonClick()}>
                HOW TO REACH ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
