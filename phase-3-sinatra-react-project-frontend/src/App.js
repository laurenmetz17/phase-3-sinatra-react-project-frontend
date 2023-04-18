
import './App.css';
import {React, useState, useEffect} from 'react';
import Inventory from './Inventory';
import InventoryForm from './InventoryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoeStores from './ShoeStores';
import StoreForm from './StoreForm';
import NavBar from './Navbar';

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
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ShoeStores stores={stores} setStores={setStores} selectedStore={selectedStore} setSelectedStore={setSelectedStore} setInventory={setInventory} totalInventory={totalInventory} setTotalInventory={setTotalInventory} inventory={inventory}/>}/>
          <Route path="/add" element={<StoreForm stores={stores} setStores={setStores}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
