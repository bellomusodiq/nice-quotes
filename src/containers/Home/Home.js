import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './Home.css';
import QuoteImages from '../QuoteImages/QuoteImages';
import Authors from '../Authors/Authors';
import BookStore from '../../components/BookStore/BookStore';

class Home extends Component{

    render() {
        return (
            <div className="Home">
                <QuoteImages />
                <Authors />
                <BookStore />
                <QuoteImages />
            </div>
        )
    }
}

export default Home;