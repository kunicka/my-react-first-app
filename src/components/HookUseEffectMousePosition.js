import React, {useState, useEffect} from 'react'

function HookUseEffectMousePosition() {
const [x, setX] = useState(0);
const [y, setY] = useState(0);

const logMousePosition = e => {
console.log('Mouse event')
setX(e.clientX);
setY(e.clientY);
}

useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)
    return() => {
        window.removeEventListener('mousemove', logMousePosition)
    }
    },
    [])

    return (
        <h3>
            Pozycja myszki:
            <br/>
            X: {x}
            <br/>
            Y: {y}
        </h3>
    )
}

export default HookUseEffectMousePosition
