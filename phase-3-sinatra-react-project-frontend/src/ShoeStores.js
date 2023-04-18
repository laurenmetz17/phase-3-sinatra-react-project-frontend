
import {React, useEffect} from 'react';
import ShoeCard from "./ShoeCard";

function ShoeStores({stores, setStores, inventory, setInventory}) {

    useEffect(() => {
        fetch("http://localhost:9292/shoe_stores")
        .then(resp => resp.json())
        .then(data => {
            setStores(data)
        })
      },[]);

    console.log(inventory)

    function setSelect(event) {
        let store = stores.filter(store => store.name == event.target.value)
        console.log(store[0].id)
    }

    //add filter for selected store

    const storeItems = stores.map(store => (
        <option key={store.name} value={store.name}>{store.name}</option>
        //<StoreCard key={store.name} store={store} />   
    ))

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} />
    ))

    return(
        <div>
            <select onChange={setSelect}>
                <option value="All" name="all">All</option>
                {storeItems}
            </select>
            {inventoryItems}
        </div>
    )
}

export default ShoeStores;