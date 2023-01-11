import React from "react";
import styles from "./Button.module.css";

export const Button = ({ design, message, onClick }) => {
  return (
    <button className={styles.button + " " + styles[design]} onClick={onClick}>
      {message}
    </button>
  );
};
