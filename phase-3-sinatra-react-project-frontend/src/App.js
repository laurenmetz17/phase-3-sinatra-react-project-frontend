
import './App.css';
import {React, useState, useEffect} from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { Route, Routes } from "react-router-dom";
import ShoeStores from './ShoeStores';

function App() {

  const [inventory, setInventory] = useState([])
  const [stores, setStores] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/inventory")
    .then(resp => resp.json())
    .then(data => {
        setInventory(data)
        console.log(data)
    })
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/shoe_stores")
    .then(resp => resp.json())
    .then(data => {
        setStores(data)
        console.log(data)
    })
  },[])
  
  return (
    <div className="App">
      <div id="stores">
        <h2>Stores:</h2>
        <ShoeStores stores={stores} setStores={setStores}/>
      </div>
      <div id="inventory">
        <h2>Inventory:</h2>
        <Inventory inventory={inventory} setInventory={setInventory}/>
      </div>
      <InventoryForm inventory={inventory} setInventory={setInventory}/>
    </div>
  );
}

export default App;
