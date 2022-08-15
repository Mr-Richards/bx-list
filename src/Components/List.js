import React, { useState, useCallback } from "react";
import "../App.css";
import { ListItem } from "./Components/ListItem";

const List = ({ bxData, renderHeader, render, extractKey, selectedKeys }) => {
  const [checkedState, setCheckedState] = useState(selectedKeys);

  const handleCheck = useCallback((changedKey, checked) => {
    setCheckedState((prevState) => {
      if (checked && prevState.includes(changedKey)) {
        return [...prevState, changedKey];
      }
      return prevState.filter((id) => id !== changedKey);
    });
  }, []);

  // const indexesOfChecked = checkedState.map((item, index) =>
  //   item ? index : undefined
  // ).fil;

  return (
    <div className="list-container">
      {renderHeader(checkedState)}
      {bxData.map((item) => {
        const key = extractKey(item);
        return (
          <ListItem
            item={item}
            id={key}
            key={key}
            renderItem={render}
            handleChange={handleCheck}
          />
        );
      })}
    </div>
  );
};

export default List;
