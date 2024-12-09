import "./styles.css";
import { useState } from "react";
import Header from "./componants/Header";
import Home from "./componants/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
