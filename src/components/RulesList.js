import React from "react";
import InternRulesData from "./dataBases/InternRulesData";
import RulesWindow from "./RulesWindow";

function RulesList (){
    const rulesListArray = InternRulesData.map(item => <RulesWindow key={item.id} item={item}/>)
    return (
        <div className="rules-list">
          <h2>Mały Dekalog Programisty</h2>
          {rulesListArray}
        </div>
    )
}

export default RulesList
