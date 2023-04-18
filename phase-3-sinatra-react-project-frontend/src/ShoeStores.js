import StoreCard from "./StoreCard";
import {React, useEffect} from 'react';

function ShoeStores({stores, setStores, setSelectedStore}) {

    useEffect(() => {
        fetch("http://localhost:9292/shoe_stores")
        .then(resp => resp.json())
        .then(data => {
            setStores(data)
            console.log(data)
        })
      },[stores]);
    

    function setSelect(e) {
        setSelectedStore(e.target.value)
    }

    const storeItems = stores.map(store => (
        <option value={store.name}>{store.name}</option>
        //<StoreCard key={store.name} store={store} />   
    ))

    return(
        <div>
            <select onChange={setSelect}>{storeItems}</select>
        </div>
    )
}

export default ShoeStores;