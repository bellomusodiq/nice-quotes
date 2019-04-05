import React from 'react';
import Image from '../../../assets/images/profile.jpg';
import './AuthorImage.css';

const authorImage = props => (
    <div className="AuthorImage">
        <img src={Image} alt="alt"/>
        <p>Nelson Mandel</p>
    </div>
)

export default authorImage;