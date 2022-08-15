import React from "react";
import "./App.css";
import { List } from "./Components/List";
import { bxData } from "./data.js";

function GetKeys(employee) {
  return employee.id;
}

function RenderItem(employee) {
  return (
    <div>
      <p>{employee.name}</p>
    </div>
  );
}

function RenderHeader(selectedKeys) {
  return (
    <div>
      <p>Selected: {selectedKeys.join(", ")}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <List
        bxData={bxData}
        render={RenderItem}
        extractKey={GetKeys}
        renderHeader={RenderHeader}
      />
    </div>
  );
}

export default App;
