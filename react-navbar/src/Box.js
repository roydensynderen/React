import React from 'react';

function Box(props) {
    const styles = {
        backgroundColor: props.color,
        textAlign: 'center',
        height: '45vh',
        width: '20%',
        display: 'inline-block',
        color: 'white'
    }
    return (
        <div style={styles}>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default Box
