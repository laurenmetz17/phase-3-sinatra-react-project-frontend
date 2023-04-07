import StoreCard from "./StoreCard";

function ShoeStores({stores, setStores}) {

    console.log(stores)

    const storeItems = stores.map(store => (
        <StoreCard key={store.name} store={store} />   
    ))

    return(
        <div>{storeItems}</div>
    )
}

export default ShoeStores;