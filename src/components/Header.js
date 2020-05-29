import React from "react";
import DaysOfInternCounting from "./DaysOfInternCounting";
import TimeMessage from "./TimeMessage";

function Header() {
  
  return (
    <div className="header">
      <DaysOfInternCounting/>
      <TimeMessage/>
    </div>
  );
}

export default Header;
