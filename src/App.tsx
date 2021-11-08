import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PLP } from "./components/PLP/PLP";
import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PDP } from "./components/PDP/PDP";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <main className={styles.main}>
          <Switch>
            <Route path="/:category" exact component={PLP} />
            <Route path="/:category/:id" exact component={PDP} />
          </Switch>
        </main>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
