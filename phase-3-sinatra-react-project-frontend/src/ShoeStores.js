function ShoeStores({stores, setStores}) {

    console.log(stores)

    const storeItems = stores.map(store => (
            <p>{store.name} id: {store.id}</p>
    ))

    return(
        <div>{storeItems}</div>
    )
}

export default ShoeStores;