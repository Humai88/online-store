import React, { Component } from "react";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes } from "./Routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <main className={styles.main}>
          <Switch>
            <Routes />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
