import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PLP } from "./components/PLP/PLP";
import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route path="/:category" element={<PLP />} />
            <Route path="/:category/:id" element={<PDP />} />
          </Routes>
        </main>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
