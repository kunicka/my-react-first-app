import React from "react";
import PropsPlayground2 from "./PropsPlayground2";
//import Counter from "./Counter";
import HookCounter from "./HookCounter";


const PropsPlayground = (props) => (
  <div>
    <h1>
      {" "}
      Siemanko {props.user}. To jest moje {props.place} do ćwiczenia zagadnień{" "}
      {props.language}.
    </h1>
    <PropsPlayground2 />
    {/* <Counter /> */}
    <HookCounter/>
  </div>
);

export default PropsPlayground;
