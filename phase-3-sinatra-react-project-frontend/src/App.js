
import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoeStores from './ShoeStores';
import StoreForm from './StoreForm';
import NavBar from './Navbar';

function App() {

  const [inventory, setInventory] = useState([])
  const [stores, setStores] = useState([])
  const totalInventory = inventory.length

  useEffect(() => {
    fetch("http://localhost:9292/shoe_stores")
    .then(resp => resp.json())
    .then(data => {
        setStores(data)
        let inventoryGrab = data.flatMap((store) => store.shoes)
        setInventory(inventoryGrab)    
    })
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ShoeStores stores={stores} setStores={setStores}  setInventory={setInventory} totalInventory={totalInventory} inventory={inventory}/>}/>
          <Route path="/new" element={<StoreForm stores={stores} setStores={setStores} inventory={inventory} setInventory={setInventory}  totalInventory={totalInventory}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
