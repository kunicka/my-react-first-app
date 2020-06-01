import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <h3>
            useState 
            <br/>
            <button onClick={()=>setCount(count+1)}>Dodaj </button>
            <button onClick={()=>setCount(0)}>Licz od nowa</button>
            <br/>
            {count}
        </h3>
    )
}

export default HookCounter