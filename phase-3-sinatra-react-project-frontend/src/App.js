import logo from './logo.svg';
import './App.css';
import React from 'react';
import InventoryForm from './InventoryForm';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <InventoryForm/>
    </div>
  );
}

export default App;
