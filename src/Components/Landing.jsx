import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <div id='landing__container'>
      <div className='text__container'>
        <div className='main__title-container'>
          <h1 id='main__title'>Ravi The Poet</h1>
          <h1 id='end__title'>.</h1>
        </div>
        <div className='main__text-container'>
          <p>New Website Coming Soon...</p>
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Landing;
