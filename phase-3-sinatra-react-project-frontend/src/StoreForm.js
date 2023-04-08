import {React, useState} from 'react';

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

    }

    function updateStore(e) {
        const target = e.target.name;
        setStoreForm({...storeForm, [target] : e.target.value})
    }

    return (
        <form id="entry" onSubmit={createStore} >
            <h2>Name :</h2>
            <input type="text" name="name" onChange={updateStore} />
            <h2>Address :</h2>
            <input type="text" name="address" onChange= {updateStore} />
            <input type="submit" value="Submit"  />
        </form>
    )
}

export default StoreForm;