import React from 'react';

const backdrop = props => (
    <div onClick={props.onClick} className={props.show?"Backdrop ShowBackdrop":"Backdrop"}></div>
)

export default backdrop;