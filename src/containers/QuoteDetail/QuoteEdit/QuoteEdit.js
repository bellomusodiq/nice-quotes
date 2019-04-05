import React, { Component } from 'react';
import './QuoteEdit.css';
import Shirt from './Shirt';
import Background from '../../../assets/images/background.jpg';
import Dropdown from '../../../components/Dropdown/Dropdown';

class QuoteEdit extends Component {

    render() {
        return (
            <div className="QuoteEdit">
                <div className="ImageEdit">
                    <img src={Background} alt="background" />
                    <div className="Edit">
                        <button className="ShowMore">Copy</button>
                        <Dropdown title="Edit" >
                            <div className="EditDropdown">
                                <span>Background Image</span>
                                <select name="" id="">
                                    <option value="photo">Photo</option>
                                    <option value="plain">Plain</option>
                                </select>
                                <span>Background Color</span>
                                <input type="color" name="" id=""/>
                                <span>Text Font</span>
                                <select name="" id="">
                                    <option value="photo">Roboto</option>
                                    <option value="plain">Sans Serif</option>
                                </select>
                                <span>Text Color</span>
                                <input type="color" name="" id=""/>
                                <span>Text Outline Color</span>
                                <input type="color" name="" id=""/>
                                <span>Text Outline Width</span>
                                <select name="" id="">
                                    <option value="photo">1px</option>
                                    <option value="plain">2px</option>
                                </select>
                                <span>Text Speed</span>
                                <select name="" id="">
                                    <option value="photo">1x</option>
                                    <option value="plain">2x</option>
                                </select>
                            </div>
                        </Dropdown>
                        <button className="ShowMore">Download Wallpaper</button>
                        <button className="ShowMore">Share</button>
                        <button className="ShowMore">F</button>
                        <button className="ShowMore">I</button>
                        <button className="ShowMore">T</button>
                        <button className="ShowMore">W</button>
                    </div>
                    <div className="TagDetail">
                        <div className="ShowMore" >Topic1</div>
                    </div>
                    <p>Author's Name</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet inventore veniam, exercitationem expedita odio sed fuga saepe quam. Assumenda ab obcaecati rem incidunt maxime reprehenderit dolores mollitia excepturi consequatur voluptate.</p>
                </div>
                <div className="BackgroundSelect">
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                    <img src={Background} alt="background" />
                </div>
                <Shirt />
            </div>
        )
    }
}

export default QuoteEdit;