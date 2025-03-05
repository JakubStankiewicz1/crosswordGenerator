import React from "react";
import "./definition.css";

const Definition = ({ definitionText, arrow, arrowPlacement, arrowLength }) => {
  const splitText = (text, maxLength) => {
    let result = "";

    const words = text.split(" ");

    for (const word of words) {
      if (word.length > maxLength) {
        for (let i = 0; i < word.length; i += maxLength) {
          result += word.slice(i, i + maxLength);
          if (i + maxLength < word.length) {
            result += "-";
          }
          result += "\n";
        }
      } else {
        result += word + "\n";
      }
    }

    return result.slice(0, -1);
  };

  const formattedText = splitText(definitionText, 7);

  return (
    <div className="definition">
      <div className="definitionContainer">
        <div className="definitionContainerTextContainer">
          <p className="definitionContainerTextContainerText">
            {formattedText.split("\n").map((line, index) => (
              <div key={index}>
                {line}
                <br />
              </div>
            ))}
          </p>
        </div>

        <div
          className={`definitionContainerArrowContainer ${
            arrowPlacement == "Top"
              ? "definitionContainerArrowContainerPlacementTop"
              : ""
          }
                ${
                  arrowPlacement == "Bottom"
                    ? "definitionContainerArrowContainerPlacementBottom"
                    : ""
                }
                ${
                  arrowPlacement == "Left"
                    ? "definitionContainerArrowContainerPlacementLeft"
                    : ""
                }
                ${
                  arrowPlacement == "Right"
                    ? "definitionContainerArrowContainerPlacementRight"
                    : ""
                }`}
        >
          <div
            className={`${
              arrowLength == "Short"
                ? "definitionContainerArrowContainerNone"
                : "definitionContainerArrowContainerLongLine"
            }`}
          />

          <div
            className={`
                  arrowContainerArrow
                  ${
                    arrow == "Up"
                      ? "definitionContainerArrowContainerArrowUp"
                      : ""
                  }
                  ${
                    arrow == "Down"
                      ? "definitionContainerArrowContainerArrowDown"
                      : ""
                  }
                  ${
                    arrow == "Left"
                      ? "definitionContainerArrowContainerArrowLeft"
                      : ""
                  }
                  ${
                    arrow == "Right"
                      ? "definitionContainerArrowContainerArrowRight"
                      : ""
                  }
                `}
          />
        </div>
      </div>
    </div>
  );
};

export default Definition;
