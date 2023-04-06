import {React, useState, useEffect} from 'react';

function Inventory({inventory, setInventory}) {

    useEffect(() => {
        fetch("http://localhost:9292/inventory").then(resp => resp.json())
        .then(data => {
            setInventory(data)
            console.log(inventory)
        })
    },[])

    return (
        <h2>Inventory</h2>
    )

}

export default Inventory
