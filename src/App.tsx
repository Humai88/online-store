import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PLP } from "./components/PLP/PLP";
import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main className={styles.main}>
        <PLP />
      </main>
    </ApolloProvider>
  );
}

export default App;
