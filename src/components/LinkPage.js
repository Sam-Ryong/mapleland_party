import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const styles = {
  link: {
    width: "100%",
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    boxSizing: "border-box",
    borderRadius: "15px",
    margin: "10px 0",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
};

const MainContent = () => {
  const { id } = useParams();
  return (
    <div style={styles.link}>
      <div>파티 링크 ID: {id}</div>
    </div>
  );
};

export default MainContent;
