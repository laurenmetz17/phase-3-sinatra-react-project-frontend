
import {React, useEffect, useState} from 'react';
import ShoeCard from "./ShoeCard";

function ShoeStores({stores, setStores, inventory, setInventory, totalInventory}) {

    const [currentStore, setCurrentStore] = useState('All')
    const filteredInventory = inventory.filter(shoe => 'All' == currentStore || currentStore == shoe.shoe_store_id )

    function handleSelect(e) {
        setCurrentStore(e.target.value)
    }

    const storeItems = stores.map(store => (
        <option key={store.name} value={store.id}>{store.name}</option>  
    ))

    const inventoryItems = filteredInventory.map(shoe => {
            return <ShoeCard key={shoe.name} shoe={shoe} stores={stores} setInventory={setInventory} inventory={inventory} totalInventory={totalInventory}/>
        
    })

    return(
        <div>
            <h2>Total Inventory: {inventoryItems.length} </h2>
            <h3>Stores:</h3>
            <select onChange={handleSelect} value={currentStore}>
                <option value="All" name="all">All</option>
                {storeItems}
            </select>
            {inventoryItems}
        </div>
    )
}

export default ShoeStores;