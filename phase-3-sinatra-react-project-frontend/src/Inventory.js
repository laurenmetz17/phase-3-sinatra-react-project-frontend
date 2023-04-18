import {React, useEffect} from 'react';
import ShoeCard from './ShoeCard';

function Inventory({inventory, setInventory, setTotalInventory}) {

    console.log(inventory)
    useEffect(() => {
        fetch("http://localhost:9292/inventory")
        .then(resp => resp.json())
        .then(data => {
            setInventory(data)
            setTotalInventory(inventory.length)
        })
      },[inventory])

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} />
    ))

    return (
        <p>{inventoryItems}</p>
    )
    

}

export default Inventory
