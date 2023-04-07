import {React} from 'react';
import ShoeCard from './ShoeCard';

function Inventory({inventory, setInventory}) {

    console.log(inventory)

    const inventoryItems = inventory.map(shoe => (
        <ShoeCard key={shoe.name} shoe={shoe} />
    ))

    return (
        <p>{inventoryItems}</p>
    )
    

}

export default Inventory
