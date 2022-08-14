import React, { useEffect, useState } from "react";
import "../App.css";
import { bxData } from "../data";

export function List() {
  const [checkedState, setCheckedState] = useState(
    new Array(bxData.length).fill(false)
  );

  useEffect(() => {
    setCheckedState(JSON.parse(window.sessionStorage.getItem("checkedState")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("checkedState", JSON.stringify(checkedState));
  }, [checkedState]);

  const handleCheck = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const indexesOfChecked = checkedState
    .map((item, index) => (item ? index : undefined))
    .filter((item) => item >= 0);

  return (
    <div className="list-container">
      {bxData.length ? (
        <ul>
          <div className="header">Selected: {indexesOfChecked.join(", ")} </div>
          {bxData.map((employee, index) => {
            return (
              <li className="employee" key={employee.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck(index)}
                  checked={checkedState[index]}
                />
                {employee.name +
                  ", " +
                  employee.address +
                  ", " +
                  employee.company}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>List is empty</p>
      )}
    </div>
  );
}
