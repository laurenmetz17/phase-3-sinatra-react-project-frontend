
import './App.css';
import {React, useState, useEffect} from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { Route, Routes } from "react-router-dom";
import ShoeStores from './ShoeStores';
import StoreForm from './StoreForm';

function App() {

  const [inventory, setInventory] = useState([])
  const [stores, setStores] = useState([])
  const [totalInventory, setTotalInventory] = useState(0)
  const [selectedStore, setSelectedStore] = useState("All")

  useEffect(() => {
    fetch("http://localhost:9292/inventory")
    .then(resp => resp.json())
    .then(data => {
        setInventory(data)
        setTotalInventory(data.length)
    })
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/shoe_stores")
    .then(resp => resp.json())
    .then(data => {
        setStores(data)
    })
  },[])


  
  return (
    <div className="App">
      <div id="float-container">
        <div id="display">
          <div id="stores">
            <h2>Stores:</h2>
            <ShoeStores stores={stores} setStores={setStores} selectedStore={selectedStore} setSelectedStore={setSelectedStore} setInventory={setInventory} setTotalInventory={setTotalInventory} inventory={inventory}/>
          </div>
          <div id="inventory">
            <h2>Inventory: {totalInventory}</h2>
            <Inventory inventory={inventory} setInventory={setInventory} setTotalInventory={setTotalInventory} selectedStore={selectedStore}/>
          </div>
        </div>
        <div id="forms">
          <h1>Add Inventory</h1>
          <InventoryForm inventory={inventory} setInventory={setInventory} stores={stores} />
          <h1>Add Store</h1>
          <StoreForm stores={stores} setStores={ShoeStores}/>
        </div>
      </div>
    </div>
  );
}

export default App;
