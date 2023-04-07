import {React, useState, useEffect} from 'react';
import ShoeCard from './ShoeCard';

function Inventory({inventory, setInventory}) {

    console.log(inventory)

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} />
    ))

    return (
        <h2>{inventoryItems}</h2>
    )
    

}

export default Inventory
