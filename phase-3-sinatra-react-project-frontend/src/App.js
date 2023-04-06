import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { Route, Routes } from "react-router-dom";

function App() {

  const [inventory, setInventory] = useState({})
  
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <InventoryForm inventory={inventory} setInventory={setInventory}/>
      <Inventory inventory={inventory} setInventory={setInventory}/>
    </div>
  );
}

export default App;
