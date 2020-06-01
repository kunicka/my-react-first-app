import React, {useState, useEffect} from 'react'

function Timer() {
    const [count, setCount] = useState(0);

    const oneSecond = () => {
        setCount(prevCount=>prevCount+1)
    }

    
    useEffect(() => {
        const interval = setInterval(oneSecond,1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <h3>UseEffect 
            <br/>
            Oglądałeś moje zadanka: <br/>
            {count} sekund
        </h3>
    )
}

export default Timer
