import React, {useState} from 'react'

function HookCounterWithObject() {

    const [name, setName] = useState({firstName: " ", lastName: " "});

    return (
        <div>
            <form> <h3>
                useState with an Object 
                <br/>
                
                <input 
                type="text" 
                value={name.firstName} 
                onChange={ e => setName({ ...name, firstName: e.target.value})}
                /> 
                <br/>
                <input 
                type="text" 
                value={name.lastName} 
                onChange={ e => setName({...name, lastName: e.target.value})}
                />
                <br/>
                imię : {name.firstName} <br/>
                nazwisko: {name.lastName} </h3>
                
            </form>
        </div>
    )
}

export default HookCounterWithObject
