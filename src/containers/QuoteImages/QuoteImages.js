import React, {Component} from 'react';
import axios from 'axios';
import './QuoteImages.css';
import QuoteImage from './QuoteImage/QuoteImage';

class QuoteImages extends Component {
    state = {
        quotes: null,
        loading: false,
        error: false,
    }
    render(){
        return (
            <div className="QuoteImages">
                <h2>EDITORS PICKS</h2>
                <div className="Images">
                    <QuoteImage />
                    <QuoteImage />
                    <QuoteImage />
                    <QuoteImage />
                    <QuoteImage />
                    <QuoteImage />
                    <QuoteImage />
                    <QuoteImage />
                </div>
                <button className="ShowMore" onClick={this.showMore} >SHOW MORE</button>
            </div>
        )
    }
}

export default QuoteImages;