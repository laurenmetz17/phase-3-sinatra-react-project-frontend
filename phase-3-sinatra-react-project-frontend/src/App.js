import logo from './logo.svg';
import './App.css';
import React from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <InventoryForm/>
      <Inventory/>
    </div>
  );
}

export default App;
