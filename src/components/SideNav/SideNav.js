import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
import Backdrop from './Backdrop';

const sideNav = props => {
    return (
        <Fragment>
            <Backdrop show={props.showSideNav} onClick={props.closeSideNav} />
            <div className={props.showSideNav?"SideNav ShowSideNav":"SideNav"}>
                <h3 className="SideNavHeading">Nice Quotes</h3>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">Love Quotes</div></Link>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">Family Quotes</div></Link>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">God Quotes</div></Link>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">Friendship Quotes</div></Link>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">Attitude Quotes</div></Link>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">Work Quotes</div></Link>
                <Link to='/' onClick={props.closeSideNav} ><div className="SideNavItem">Wisdom Quotes</div></Link>
            </div>
        </Fragment>
    )
}

export default sideNav;