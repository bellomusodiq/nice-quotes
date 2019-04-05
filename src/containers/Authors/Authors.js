import React, {Component} from 'react';
import axios from 'axios';
import AuthorImage from './AuthorImage/AuthorImage';
import './Authors.css';

class Authors extends Component{

    render(){
        return(
            <div className="Authors">
                <AuthorImage />
                <AuthorImage />
                <AuthorImage />
                <AuthorImage />
                <AuthorImage />
                <AuthorImage />
            </div>
        )
    }
}

export default Authors;