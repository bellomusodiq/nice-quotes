import React from 'react';
import './SearchLanguage.css';

const searchLanguage = (props) => (
    <div className="SearchLanguage">
        <form onSubmit={props.search}>
            <label id="searchInpLabel" htmlFor="searchInp">S</label>
            <input placeholder="Search quotes" value={props.searchVal} type="text" id="searchInp" className="SearchInp" 
            onChange={props.onChangeSearch} className="SearchInput"/>
        </form>
        <select className="langSelect" name="" onChange={props.onChangeLang} value={props.langVal} id="">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
        </select>
    </div>
)

export default searchLanguage;