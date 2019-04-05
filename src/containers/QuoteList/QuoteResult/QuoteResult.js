import React, { Fragment } from 'react';
import './QuoteResult.css';
import Quote from './Quote';
import { Link } from "react-router-dom";

const quoteResult = props => {

    return (
        <Fragment>
            <div className="QuoteResult">
                <h2>Motivational Quotes</h2>
                <Quote />
                <Quote />
                <Quote />
                <Quote />
                <Quote />
                <Quote />
                <div className="Pagination">
                    <Link to="/">{'<<'}</Link>
                    <Link to="/" className="ShowMore"></Link>
                    <Link to="/" className="ShowMore">1</Link>
                    <Link to="/" className="ShowMore active">2</Link>
                    <span>...</span>
                    <Link to="/" className="ShowMore">3</Link>
                    <Link to="/" className="ShowMore">4</Link>
                    <Link to="/" className="">{'>>'}</Link>
                </div>
            </div>
        </Fragment >
    )
}

export default quoteResult;