import React, {useState, useRef, useEffect} from "react";

//import '../css/main.css';

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

    useEffect(() => {
        
    }, [])

    const onMenuButtonClick = () => {
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
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav" ref={menuNav}>
            <li className="nav-item current" ref={homeItem}>
              <a href="" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item" ref={aboutItem}>
              <a href="" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item" ref={workItem}>
              <a href="" className="nav-link">
                MY WORK
              </a>
            </li>
            <li className="nav-item" ref={contactItem}>
              <a href="" className="nav-link">
                HOW TO REACH ME
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
