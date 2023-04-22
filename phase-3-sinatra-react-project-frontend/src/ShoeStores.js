
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

    console.log(inventory)

    function setSelect(event) {
        if(event.target.value == "All") {
            console.log("all")
            fetch("http://localhost:9292/shoes")
            .then(resp => resp.json())
            .then(data => {
                setInventory(data)
                setTotalInventory(data.length)
            })
        }
        else {
            let store = stores.filter(store => store.name == event.target.value)
            console.log(store[0])
            console.log(store[0].shoes)
            setInventory(store[0].shoes)
            setTotalInventory(store[0].shoes.length)
        }
    }

    //add filter for selected store

    const storeItems = stores.map(store => (
        <option key={store.name} value={store.name}>{store.name}</option>
        //<StoreCard key={store.name} store={store} />   
    ))

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} stores={stores} setInventory={setInventory} inventory={inventory}/>
    ))

    return(
        <div>
            <h2>Total Inventory: {totalInventory} </h2>
            <select onChange={setSelect}>
                <option value="All" name="all">All</option>
                {storeItems}
            </select>
            {inventoryItems}
        </div>
    )
}

export default ShoeStores;