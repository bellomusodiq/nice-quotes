import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const header = props => {
    return (
        <div className="Header">
            <div className="Menu" onClick={props.openSideNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="HeaderLogo">
                <h1>Nice Quotes</h1>
            </div>
            <Link to='/' className="nav-item">Love Quotes</Link>
            <Link to='/' className="nav-item">Family Quotes</Link>
            <Link to='/' className="nav-item">God Quotes</Link>
            <Link to='/' className="nav-item">Friendship Quotes</Link>
            <Link to='/' className="nav-item">Attitude Quotes</Link>
            <Link to='/' className="nav-item">Positivity Quotes</Link>
            <Link to='/' className="nav-item">Work Quotes</Link>
            <Link to='/' className="nav-item">Wisdom Quotes</Link>
        </div>
    )
}

export default header;