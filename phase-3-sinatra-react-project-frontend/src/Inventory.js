import {React, useEffect} from 'react';
import ShoeCard from './ShoeCard';

function Inventory({inventory, setInventory, selectedStore, setTotalInventory}) {

    useEffect(() => {
        fetch("http://localhost:9292/shoes")
        .then(resp => resp.json())
        .then(data => {
            setInventory(data)
            setTotalInventory(inventory.length)
        })
    },[])

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} />
    ))

    return (
        <p>{inventoryItems}</p>
    )
    

}

export default Inventory
