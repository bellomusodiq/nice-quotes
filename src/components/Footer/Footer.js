import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const footer = props => (
    <div className="Footer">
        <div className="FooterNav">
            <Link to='/'>About</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Term of Service</Link>
            <Link to='/'>Data Policy</Link>
        </div>
        <div className="Socials">
            <div>F</div>
            <div>I</div>
            <div>T</div>
        </div>
    </div>
)

export default footer;