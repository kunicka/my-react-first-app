import React from 'react';
import PropsPlayground2 from "./PropsPlayground2";
//import Counter from "./Counter";
import HookCounter from "./HookCounter";
import HookCounter2 from "./HookCounter2";
import HookCounterWithObject from "./HookCounterWithObject";
import HookCounterWithArray from "./HookCounterWithArray";
import HookCounterUseEffect from "./HookCounterUseEffect";
import HookUseEffectMousePosition from "./HookUseEffectMousePosition";
import Timer from "./Timer";
// import DataFetchingContainer from './DataFetchingContainer';

function HooksExercises() {
    return (
        <div>
           <PropsPlayground2/>
           <HookCounter/>
           <HookCounter2/> 
           <HookCounterWithObject/>
           <HookCounterWithArray/>
           <HookCounterUseEffect/>
           <HookUseEffectMousePosition/>
           <Timer/>
           {/* <DataFetchingContainer/> */}
        </div>
    )
}

export default HooksExercises
