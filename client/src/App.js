import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Components/Navbar";
import ShoppingList from "./Components/ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
