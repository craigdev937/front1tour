import React from "react";
import "./Header.css";
import Logo from "@public/shared/logo.svg";
import Ham from "@public/shared/icon-hamburger.svg";
import { Link, Outlet } from "react-router-dom";
import { Side } from "../side/Side";

export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <React.Fragment>
            <section className="header-container">
                {showMenu && (
                    <Side id="close-menu" handleMenu={handleMenu} />
                )}
                <nav className="nav-container">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="nav-line"></div>
                    <aside className="nav-links-container">
                        <Link 
                            to="/" 
                            id="home" 
                            className="nav-link-item show"
                        >
                            <span>00</span>
                            <div className="nav-link">Home</div>
                        </Link>
                        <Link 
                            to="/dest" 
                            id="destination" 
                            className="nav-link-item show"
                        >
                            <span>01</span>
                            <div className="nav-link">Destination</div>
                        </Link>
                        <Link 
                            to="/crew" 
                            id="crew" 
                            className="nav-link-item show"
                        >
                            <span>02</span>
                            <div className="nav-link">Crew</div>
                        </Link>
                        <Link 
                            to="/tech" 
                            id="technology" 
                            className="nav-link-item show"
                        >
                            <span>02</span>
                            <div className="nav-link">Technology</div>
                        </Link>
                        <div 
                            id="hamburger"
                            onClick={handleMenu}
                            className="nav-link-item hidden menu"
                        >
                            <img src={Ham} alt="Menu" />
                        </div>
                    </aside>
                </nav>
            </section>
            <Outlet />
        </React.Fragment>
    );
};


