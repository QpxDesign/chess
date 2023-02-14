import React from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Board from "../components/Board";
import Sideboard from "../components/Sideboard";
import uuid from "react-uuid";

export default function HomePage() {
  const size = [1, 2, 3, 4, 5, 6, 7, 8];
  function simpleDetermineClassLightOrDark(y: any, x: any) {
    var class_name = "square ";
    if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
      class_name += "dark ";
    } else {
      class_name += "light ";
    }
    return class_name;
  }
  return (
    <div>
      <WelcomeScreen />
      <div className="App">
        <div className="chess-board-wrapper">
          <div className="chess-board">
            {size.map((item1: any, yIndex: any) => {
              return (
                <div className="row" key={item1.length * yIndex + uuid()}>
                  {size.map((item2: any, xIndex: any) => {
                    return (
                      <div
                        key={String(item2?.id) + uuid()}
                        className={simpleDetermineClassLightOrDark(
                          yIndex,
                          xIndex
                        )}
                      >
                        {item2 !== undefined &&
                        item2 !== null &&
                        item2.icon !== undefined ? (
                          <img
                            src={`/assets/pieces/${item2.icon}-${item2.color}.svg`}
                            className={item2.color}
                            alt={item2.icon}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <Sideboard />
      </div>
    </div>
  );
}
