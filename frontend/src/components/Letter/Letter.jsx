import React from "react";
import "./letter.css";

const Letter = ({ letter, number }) => {
  return (
    <div className="letter">
      <div className="letterContainer">
        <div className="letterContainerTextContainer">
          <p
            className={`${
              letter === ""
                ? "letterContainerTextContainerNone"
                : "letterContainerTextContainerText"
            }`}
          >
            {letter}
          </p>
        </div>

        <div className="letterContainerNumberContainer">
          <p
            className={`${
              number === ""
                ? "letterContainerNumberContainerNone"
                : "letterContainerNumberContainerNumber"
            }`}
          >
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
