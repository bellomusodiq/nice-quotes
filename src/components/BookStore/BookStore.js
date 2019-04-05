import React from 'react';
import Book from '../../assets/images/book.jpg';
import Calender from '../../assets/images/calender.jpg';
import Appstore from '../../assets/images/appstore.png';
import Playstore from '../../assets/images/playstore.png';
import Donate from '../../assets/images/donate.png';
import './BookStore.css';

const bookStore = props => (
    <div className="Bookstore">
        <img src={Book} width="90%" alt=""/>
        <img src={Calender} width="90%" alt=""/>
        <div className="Appstore">
            <img src={Appstore} width="100%" alt=""/>
            <img src={Playstore} width="100%" alt=""/>
        </div>
        <img src={Donate} width="90%" alt=""/>
    </div>
)

export default bookStore;