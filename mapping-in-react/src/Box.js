import React from "react";
import './Box.css';

function Box(props) {
    const divStyles = {backgroundColor: props.backgroundColor};
    return (
        <div className="box" style={divStyles}></div>
    )
}

export default Box;