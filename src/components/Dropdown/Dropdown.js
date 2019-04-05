import React from 'react';
import './Dropdown.css';

const dropdown = props => (
    <div class="dropdown">
        <button className="ShowMore">{props.title}</button>
        <div class="dropdown-content">
            {props.children}
        </div>
    </div>
)

export default dropdown;