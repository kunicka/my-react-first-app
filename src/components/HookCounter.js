import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Licz {count}</button>
            <button onClick={()=>setCount(0)}>Licz od nowa</button>
        </div>
    )
}

export default HookCounter