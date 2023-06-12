
import {React, useEffect} from 'react';
import ShoeCard from "./ShoeCard";

function ShoeStores({stores, setStores, inventory, setInventory, totalInventory, setTotalInventory}) {

    useEffect(() => {
        fetch("http://localhost:9292/shoe_stores")
        .then(resp => resp.json())
        .then(data => {
            setStores(data)
        })
      },[]);

    function setSelect(event) {
        if(event.target.value == "All") {
            fetch("http://localhost:9292/shoe_stores")
            .then(resp => resp.json())
            .then(data => {
                let inventoryGrab = data.flatMap((store) => store.shoes)
            setInventory(inventoryGrab)
            setTotalInventory(inventoryGrab.length) 
            })
        }
        else {
            let store = stores.filter(store => store.name == event.target.value)
            setInventory(store[0].shoes)
            setTotalInventory(store[0].shoes.length)
        }
    }

    const storeItems = stores.map(store => (
        <option key={store.name} value={store.name}>{store.name}</option>  
    ))

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} stores={stores} setInventory={setInventory} inventory={inventory} setTotalInventory={setTotalInventory} totalInventory={totalInventory}/>
    ))

    return(
        <div>
            <h2>Total Inventory: {totalInventory} </h2>
            <h3>Stores:</h3>
            <select onChange={setSelect}>
                <option value="All" name="all">All</option>
                {storeItems}
            </select>
            {inventoryItems}
        </div>
    )
}

export default ShoeStores;