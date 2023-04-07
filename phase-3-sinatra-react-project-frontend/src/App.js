
import './App.css';
import {React, useState, useEffect} from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { Route, Routes } from "react-router-dom";

function App() {

  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/inventory")
    .then(resp => resp.json())
    .then(data => {
        setInventory(data)
        console.log(data)
    })
  },[])
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <InventoryForm inventory={inventory} setInventory={setInventory}/>
      <Inventory inventory={inventory} setInventory={setInventory}/>
    </div>
  );
}

export default App;
