import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <div id='landing__container'>
      <div id='landing__content-container'>
        <div id='text__container'>
          <div id='main__title-container'>
            <h1 id='main__title'>Ravi The Poet</h1>
            <h1 id='end__title'>.</h1>
          </div>
          <div id='main__text-container'>
            <p>New Website Coming Soon...</p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Landing;
