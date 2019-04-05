import React, { Component, Fragment } from 'react';
import './QuoteList.css';
import QuoteResult from './QuoteResult/QuoteResult';
import Book from '../../assets/images/book.jpg';
import QuoteImages from '../QuoteImages/QuoteImages';
import Subscription from '../../components/Subscription/Subscription';

class QuoteList extends Component {

    render() {
        return (
            <Fragment>
                <div className="QuoteList">
                    <QuoteResult />
                    <div className="Ad"></div>
                </div>
                <div className="SubscriptionEbook">
                    <Subscription />
                    <div className="SubscriptionAd"></div>
                    <div className="Ebook">
                        <img src={Book} alt="book" />
                    </div>
                </div>
                <QuoteImages />
            </Fragment>
        )
    }
}

export default QuoteList;