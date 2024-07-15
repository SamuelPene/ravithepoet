import React from "react";

function Button() {
  const emailAddress = "mailto:rrravitesh@gmail.com";

  return (
    <a id='contact' href={emailAddress}>
      CONTACT ME
    </a>
  );
}

export default Button;
