import React from "react";
import PropsPlayground2 from "./PropsPlayground2";
import Counter from "./Counter";


const PropsPlayground = (props) => (
  <div>
    <h1>
      {" "}
      Siemanko {props.user}. To jest moje {props.place} do ćwiczenia zagadnień{" "}
      {props.language}.
    </h1>
    <PropsPlayground2 />
    <Counter />
  </div>
);

export default PropsPlayground;
