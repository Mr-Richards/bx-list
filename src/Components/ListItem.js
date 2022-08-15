import React from "react";

const ListItem = ({ item, id, renderItem, handleChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => handleChange(id, e.target.checked)}
      ></input>
      {renderItem(item)}
    </div>
  );
};

export default React.memo(ListItem);
