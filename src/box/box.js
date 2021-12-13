import React from "react";

import "./App.css";

export default function box(props) {
  var styles = {
    box: {
      backgroundColor: " rgba(217, 171, 35, 0.70)",
      width: props.width,
      height: props.height,
      borderRadius: "20%",
      color: "white",
    },
  };

  return <div style={styles.box} id={props.id}></div>;
}

