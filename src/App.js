import React, { createContext } from "react";

import "./App.css";
import Component1 from "./Components/component1";

const FirstName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Umar"}>
        <Component1 />
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName };
