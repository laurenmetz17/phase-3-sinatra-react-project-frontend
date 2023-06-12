import {React, useState} from 'react';

function InventoryForm({inventory,setInventory,stores, setTotalInventory, totalInventory}){

    const [inventoryForm, setInventoryForm] = useState({
        name: "",
        style : "",
        price : '',
        color : "",
        shoe_store_id: 8
    })

    const storeItems = stores.map(store => (
        <option key={store.id} value={store.id}>{store.name}</option>
    ))

    function createShoe(e){
        e.preventDefault();       
        fetch('http://localhost:9292/shoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(inventoryForm),
            })
            .then(resp => resp.json())
            .then((newShoe) => {
                setInventory([...inventory, newShoe]);
                setTotalInventory(totalInventory+1)
                
            });

            e.target.children[1].value = ""
            e.target.children[3].value = ""
            e.target.children[5].value = ""
            e.target.children[7].value = ""
            setTotalInventory(inventory.length)
    }

    function updateShoe(e){
        const target = e.target.name;
        setInventoryForm({...inventoryForm, [target] : e.target.value})
    }

    function chooseStore(e) {
        const target = e.target.name;
        setInventoryForm({...inventoryForm, shoe_store_id : e.target.value})
    }
    

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
            <select type="number" name="shoe_store_id" onChange={chooseStore}>
                {storeItems}
            </select>
            <input type="submit" value="Submit"  />
        </form>
    )
}

export default InventoryForm;