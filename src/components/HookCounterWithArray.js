import React, {useState} from 'react'

function HookCounterWithArray() {
    const [items, setItems] = useState([])

    const addItem = () =>
    setItems([...items, {
        id:items.length,
        value: Math.floor(Math.random()*10)+1
    }])
    return (
        <h3>
            useState with an Array 
            <br/>
            <button onClick={addItem}>Add a random number</button>
            <ul>
                {
                    items.map(item=> <li key={item.id}>{item.value}</li>)
                }
            </ul>
            
        </h3>
    )
}

export default HookCounterWithArray
