import React from "react";
import PropsPlayground2 from "./PropsPlayground2";
//import Counter from "./Counter";
import HookCounter from "./HookCounter";
import HookCounter2 from "./HookCounter2";
import HookCounterWithObject from "./HookCounterWithObject";
import HookCounterWithArray from "./HookCounterWithArray";
import HookCounterUseEffect from "./HookCounterUseEffect";
import HookUseEffectMousePosition from "./HookUseEffectMousePosition";

const PropsPlayground = (props) => (
  <div>
    <h1>
      {" "}
      Siemanko, tutaj {props.user}. <br />
      To jest moje {props.place} do ćwiczenia zagadnień <br/> 
      {props.language}.
    </h1>
    <PropsPlayground2 />
    {/* <Counter /> */}
    <HookCounter />
    <HookCounter2 />
    <HookCounterWithObject />
    <HookCounterWithArray />
    <HookCounterUseEffect />
    <HookUseEffectMousePosition />
  </div>
);

export default PropsPlayground;
