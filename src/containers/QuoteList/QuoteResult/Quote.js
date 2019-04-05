import React from 'react';
import './Quote.css';
import Profile from '../../../assets/images/profile.jpg';

const quote = props => (
    <div className="Quote">
    <img src={Profile} alt="profile"/>
    <div className="QuoteText">
        <h3>DON'T WAIT FOR THE RIGHT OPPORTUNITY. CREATE IT</h3>
        <p>Nelson Mandela / Motivation, Attitude</p>
        <div className="Buttons">
            <button className="ShowMore" style={{margin: '0 5px'}} >Like</button>
            <button className="ShowMore" style={{margin: '0 5px'}} >More</button>
            <button className="ShowMore" style={{margin: '0 5px'}} >Copy</button>
            <button className="ShowMore" style={{margin: '0 5px'}} >F</button>
            <button className="ShowMore" style={{margin: '0 5px'}} >I</button>
            <button className="ShowMore" style={{margin: '0 5px'}} >T</button>
            <button className="ShowMore" style={{margin: '0 5px'}} >W</button>
        </div>
    </div>
    </div>
)

export default quote;