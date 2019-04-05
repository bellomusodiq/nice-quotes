import React, { Component } from "react";
import './QuoteDetail.css';
import QuoteEdit from "./QuoteEdit/QuoteEdit";
import RelatedSubscribe from "./QuoteEdit/RelatedSubscribe/RelatedSubscribe";
import QuoteImages from "../QuoteImages/QuoteImages";


class QuoteDetail extends Component{

    render(){
        return (
            <div className="QuoteDetail">
                <QuoteEdit />
                <RelatedSubscribe />
                <QuoteImages />
            </div>
        )
    }
}

export default QuoteDetail;