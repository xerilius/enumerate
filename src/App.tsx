import React from "react";
import { Navbar, Content } from "./components";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
