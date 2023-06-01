import React from "react";
import "./Side.css";
import Close from "@public/shared/icon-close.svg";
import { Link } from "react-router-dom";

type HAN = {
    id: string,
    handleMenu: () => void
};

export const Side = ({ handleMenu }: HAN) => {
    return (
        <React.Fragment>
            <section className="side">
                <aside className="side-links-container">
                    <div 
                        className="side-link-item" 
                        id="close" 
                        onClick={handleMenu}
                    >
                        <img src={Close} alt="close" />
                    </div>
                    <Link 
                        to="/"
                        id="home" 
                        className="side-link-item"
                    >
                        <span>00</span>
                        <div className="nav-link">Home</div>
                    </Link>
                    <Link 
                        to="/dest"
                        id="destination" 
                        className="side-link-item"
                    >
                        <span>01</span>
                        <div className="nav-link">Destination</div>
                    </Link>
                    <Link 
                        to="/crew"
                        id="crew" 
                        className="side-link-item"
                    >
                        <span>02</span>
                        <div className="nav-link">Crew</div>
                    </Link>
                    <Link 
                        to="/tech"
                        id="technology" 
                        className="side-link-item"
                    >
                        <span>03</span>
                        <div className="nav-link">Technology</div>
                    </Link>
                </aside>
            </section>
        </React.Fragment>
    );
};


