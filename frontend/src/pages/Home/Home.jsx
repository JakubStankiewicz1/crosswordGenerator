import React, { useState, useEffect } from "react";
import "./home.css";
import Letter from "../../components/Letter/Letter";
import Definition from "../../components/Definition/Definition";

import hasla from "../../pass.json";

const getRandomPassword = () => {
  const randomIndex = Math.floor(Math.random() * hasla.hasla.length);
  return hasla.hasla[randomIndex];
};

const Home = () => {
  const [password, setPassword] = useState(getRandomPassword());

  return (
    <div className="home">
      <div className="homeContainer">
        <Definition
          definitionText={password.definicja}
          arrow="Down"
          arrowPlacement="Bottom"
          arrowLength="Short"
        />
        {password.odpowiedz.split("").map((char, index) => (
          <Letter key={index} letter={char} number={index + 1} />
        ))}
      </div>

      <div className="crosswordRow">
        <Definition
          definitionText={"{password.definicja}"}
          arrow="Down"
          arrowPlacement="Bottom"
          arrowLength="Short"
        />
        {password.odpowiedz.split("").map((char, index) => (
          <Letter key={index} letter={char} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Home;
