import React from 'react';
import Image from '../../../assets/images/background.jpg';
import './QuoteImage.css';

const quoteImage = props => (
    <div className="QuoteImage">
        <img src={Image} alt="background" />
    </div>
)

export default quoteImage;