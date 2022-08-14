import React from "react";
import "../App.css";
import { bxData } from "../data";

export function List() {
  return (
    <>
      <div className="list-container">
        {bxData.map((data, key) => {
          return (
            <div key={key}>
              {" "}
              {data.name + ", " + data.address + ", " + data.company}{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}
