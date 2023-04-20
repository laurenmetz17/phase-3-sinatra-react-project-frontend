import {React, useState} from 'react';
import InventoryForm from './InventoryForm';

function StoreForm({stores,setStores}) {

    const [storeForm, setStoreForm] = useState({
        name: "",
        address: ""
    })

    function createStore(e) {
        e.preventDefault();       
        fetch('http://localhost:9292/shoe_stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(storeForm),
            })
            .then(resp => resp.json())
            .then((newStore) => {
                setStores([...stores, newStore]);
            });

            e.target.children[2].value = ""
            e.target.children[4].value = ""

    }

    function updateStore(e) {
        const target = e.target.name;
        setStoreForm({...storeForm, [target] : e.target.value})
    }

    return (
        <div id="forms">
            <form id="entry" onSubmit={createStore} >
                <h1>Add Store:</h1>
                <h2>Name :</h2>
                <input type="text" name="name" onChange={updateStore} />
                <h2>Address :</h2>
                <input type="text" name="address" onChange= {updateStore} />
                <input type="submit" value="Submit"  />
            </form>
            <h1>Add Inventory:</h1>
            <InventoryForm/>
        </div>


    )
}

export default StoreForm;