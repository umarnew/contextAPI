import React, { Component } from "react";
import { FirstName } from "../App";

const Component3 = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <h1>Data passed Will be shown here {fname}</h1>;
        }}
      </FirstName.Consumer>
      <h1>This is Component3</h1>
    </>
  );
};

export default Component3;
