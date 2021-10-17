import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
        <nav className=" purple darken px1">
            <div className="nav-wrapper ">
                <a href="/" className="brand-logo left">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Task List</NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>
    )
