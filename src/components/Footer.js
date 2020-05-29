import React from "react";

function clickingFunction() {
  console.log("I was clicked");
  document.getElementById("root").appendChild()

  
}

function mouseOverFunction() {
  console.log("I was hovered")
}

function Footer () {
  return (
    <div>
      <footer onMouseOver={mouseOverFunction}><h4>I am a sexi footer of this page</h4></footer>
      <button onClick={clickingFunction}>Clik and check a sercet message in your console </button>
    </div>
  )
};

export default Footer;
