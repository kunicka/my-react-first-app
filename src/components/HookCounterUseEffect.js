import React, {useState, useEffect} from "react";

function HookCounterUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(()=>{document.title=`Kliknąłeś ${count} razy`})
  
  return (
    <h3>
        UseEffect
        <br/>
      <button onClick={() => setCount(count+1)}>
       Dodaj
      </button>
      <br/>
       {count}
       <br/>
       Zobacz w tytule strony ile razy kliknąłeś
    </h3>
  );
}

export default HookCounterUseEffect;
