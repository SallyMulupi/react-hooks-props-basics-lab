import React from "react";

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>
        {prop.bio === "" && !prop.bio ? <p>don't display</p> : <p>{prop.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p> Links  github="https://github.com/liza"  linkedin ="https://www.linkedin.com/in/liza/"</p>
      {/* add your <Links /> component here */}
    </div>
  );
}



export default About;
