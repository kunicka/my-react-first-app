import React from "react";

function DreamCard (props) {
    return (
        <p className="dream-card">
            <img className="photoClass" src={props.dream.imgUrl} alt={props.dream.alt}/>
            <h3>{props.dream.name}</h3>
            <h4 style={{display: props.dream.description ? "block" : "none"}}>-{props.dream.description}</h4>
        </p>
    )
}

export default DreamCard