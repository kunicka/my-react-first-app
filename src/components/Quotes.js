import React from "react";

function Quotes (props) {

    return(
        <div className="time-message">
        <p>{props.item.quote}</p>
        <p>{props.item.author}</p>
        </div>
    )
}

export default Quotes