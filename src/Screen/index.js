import React from "react";
import { node } from "prop-types";
import HeaderOtherPages from "../HeaderotherPages/index";

export default function Screen({ children }) {
  return (
    <>
      <HeaderOtherPages />
      {children}
    </>
  );
}
Screen.propTypes = {
  children: node.isRequired,
};
