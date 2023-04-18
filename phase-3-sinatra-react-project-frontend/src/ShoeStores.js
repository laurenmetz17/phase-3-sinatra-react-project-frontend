import StoreCard from "./StoreCard";
import {React, useEffect} from 'react';

function ShoeStores({stores, setStores}) {

    useEffect(() => {
        fetch("http://localhost:9292/shoe_stores")
        .then(resp => resp.json())
        .then(data => {
            setStores(data)
            console.log(data)
        })
      },[stores])

    const storeItems = stores.map(store => (
        <StoreCard key={store.name} store={store} />   
    ))

    return(
        <div>{storeItems}</div>
    )
}

export default ShoeStores;