import { useState } from "react";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Card from "./components/CardInfo/Card";
import CardInfo from "./components/CardInfo/CardInfo";

function App() {
  return (
    <div className="App">
      <Nav />
      <Menu />
      <Card/>
      <CardInfo />

    </div>
  );
}

export default App;
