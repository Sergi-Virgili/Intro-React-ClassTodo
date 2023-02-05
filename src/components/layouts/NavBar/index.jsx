import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div>Task List</div>
      <div>
        <header>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/tasks/form"}>Create</Link>
        </header>
      </div>
    </div>
  );
};
