import React from "react";

function RulesWindow(props) {
  return (
    <div className="rules-window">
      <div className="rule-photo"><img src={props.item.img} alt={props.item.id}/></div>
      <h3>{props.item.id}. {props.item.title}</h3> <br/>
    </div>
  );
}

export default RulesWindow
