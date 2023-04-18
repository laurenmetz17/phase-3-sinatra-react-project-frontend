import {React, useState} from 'react';

function InventoryForm(inventory,setInventory,stores){

    const [inventoryForm, setInventoryForm] = useState({
        name: "",
        style : "",
        price : '',
        color : "",
        shoe_store_id: ''
    })

    //implement check for if store exist and create if not add add to existing store id 
    function createShoe(e){
        e.preventDefault();       
        fetch('http://localhost:9292/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(inventoryForm),
            })
            .then(resp => resp.json())
            .then((newShoe) => {
                console.log(newShoe)
                setInventory([...inventory, newShoe]);
            });
        setInventoryForm({
            name: "",
            style : "",
            price : '',
            color : "",
            shoe_store_id: ''
        })
    }

    function updateShoe(e){
        const target = e.target.name;
        setInventoryForm({...inventoryForm, [target] : e.target.value})
    }

    //console.log(Object.keys(stores))
    //const storeMenu = stores.forEach(store => {
        //<option value={store.name}>{store.name}</option>
    //})

    return (
        <form id="entry" onSubmit={createShoe} >
            <h2>Name :</h2>
            <input type="text" name="name" onChange={updateShoe} />
            <h2>Style :</h2>
            <input type="text" name="style" onChange= {updateShoe} />
            <h2>Price :</h2>
            <input type="number" name='price' onChange={updateShoe} />
            <h2>Color :</h2>
            <input type="text" name='color' onChange={updateShoe} />
            <h2>Store Name</h2>
            <select id="store" name="store_name" size="3">
                {}
            </select>
            <input type="number" name='store' onChange={updateShoe} />
            <input type="submit" value="Submit"  />
        </form>
    )
}

export default InventoryForm;