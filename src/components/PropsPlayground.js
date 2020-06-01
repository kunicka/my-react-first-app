import React, {useState} from "react";

import HooksExercises from "./HooksExercises";

function PropsPlayground (props) {
    const [display, setDisplay] = useState(false);
    return(
  <div>
    <h1>
        Myślisz, że to koniec?  </h1>
     <h3> Siemanko, tutaj {props.user}. <br />
      Dotarłeś do mojej tajemnej {props.place} , w której trzymam zadanka z  <br/> 
      {props.language}.
   
    <div>
    <button onClick={()=> setDisplay(!display)}>Kliknij aby zobaczyć moje zadania</button>
    {display && <HooksExercises/>}
  </div>
  </h3>
  </div>
    )};

export default PropsPlayground;
