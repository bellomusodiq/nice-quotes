import React from 'react';
import Background from '../../assets/images/background.jpg';

const subscription = props => (
    <div className="Subscription">
        <img src={Background} alt="background" />
        <form action="">
            <input type="text" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
        </form>
    </div>
)

export default subscription;