import {React, useState} from 'react';

function StoreForm({stores,setStores}) {

    function createStore(store) {

    }

    function updateStore() {
        
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