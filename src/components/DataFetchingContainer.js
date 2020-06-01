import React, {useState} from 'react'
import DataFetching from './DataFetching';
// import DataFetchingOne from "./DataFetching"

function DataFetchingContainer() {
    const [display, setDisplay] = useState(false);
    // const [displayOne, setDisplayOne] = useState(true);

    
    return (
        <div>
     <h3>Cała lista</h3>

    <button onClick={()=> setDisplay(!display)}>Kliknij, aby rozwinąć/zwinąć całą listę</button>
    {display && <DataFetching/>}

    <h3>Który post chcesz wyświetlić?</h3>
    
    {/* <button onClick={()=>setDisplayOne(!displayOne)}>Wyświetl</button>
    {displayOne && <DataFetchingOne/>} */}
        </div>
    )
}

export default DataFetchingContainer
