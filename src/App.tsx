import React from "react";
import styles from "./app.module.css";
import Events from "./containers/Events";

function App() {
  return (
    <div className={styles.app}>
      <Events />
    </div>
  );
}

export default App;
