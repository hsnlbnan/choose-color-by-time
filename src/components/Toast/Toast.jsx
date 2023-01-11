import React from "react";
import styles from "./Toast.module.css";
export const Toast = ({ leftPosition, message }) => {
  return (
    <div
      className={styles.toast}
      style={{
        left: `${leftPosition}`,
      }}
    >
      {message}
    </div>
  );
};
