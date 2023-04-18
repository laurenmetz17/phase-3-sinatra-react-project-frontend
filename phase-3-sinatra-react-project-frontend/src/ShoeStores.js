import StoreCard from "./StoreCard";
import {React, useEffect} from 'react';

function ShoeStores({stores, setStores}) {

    useEffect(() => {
        fetch("http://localhost:9292/shoe_stores")
        .then(resp => resp.json())
        .then(data => {
            setStores(data)
        })
      },[]);

    function setSelect(event) {
        let store = stores.filter(store => store.name == event.target.value)
        console.log(store[0])
    }

    //add filter for selected store

    const storeItems = stores.map(store => (
        <option value={store.name}>{store.name}</option>
        //<StoreCard key={store.name} store={store} />   
    ))

    return(
        <div>
            <select onChange={setSelect}>
                <option value="All" name="all">All</option>
                {storeItems}
            </select>
        </div>
    )
}

export default ShoeStores;