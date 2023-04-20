function ShoeCard({stores, shoe}) {

    let store = stores.filter(store => store.id == shoe.shoe_store_id)
    console.log(store)

    return (
        <p>{shoe.name}, style: {shoe.style}, price: {shoe.price} color: {shoe.color} store: {store[0].name}</p>
    )

}

export default ShoeCard;