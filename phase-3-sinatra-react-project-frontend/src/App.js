
import './App.css';
import {React, useState, useEffect} from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoeStores from './ShoeStores';
import StoreForm from './StoreForm';

function App() {

  const [inventory, setInventory] = useState([])
  const [stores, setStores] = useState([])
  const [totalInventory, setTotalInventory] = useState(0)
  const [selectedStore, setSelectedStore] = useState("All")

  useEffect(() => {
    fetch("http://localhost:9292/shoes")
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoeStores stores={stores} setStores={setStores} selectedStore={selectedStore} setSelectedStore={setSelectedStore} setInventory={setInventory} setTotalInventory={setTotalInventory} inventory={inventory}/>}/>
          <Route path="/add" element={<StoreForm stores={stores} setStores={ShoeStores}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
