import React from 'react';
import './RelatedSubscribe.css';
import Mug from '../../../../assets/images/mug.jpg';
import Book from '../../../../assets/images/book.jpg';
import QuoteResult from '../../../QuoteList/QuoteResult/QuoteResult';
import Subscription from '../../../../components/Subscription/Subscription';

const relatedSubscribe = props => (
    <div className="RelatedSubscribe">
        <QuoteResult />
        <div className="SubscriptionBuy">
            <div className="Products">
                <img src={Book} alt="book" />
                <img src={Mug} alt="mug" />
            </div>
            <Subscription />
        </div>
    </div>
)

export default relatedSubscribe;