function ShoeCard({stores, shoe}) {

    let store = stores.filter(store => store.id == shoe.shoe_store_id)
    console.log(store)

    function handleDelete(e) {
        
    }

    return (
        <div>
            <p>{shoe.name}, style: {shoe.style}, price: {shoe.price} color: {shoe.color} store: {store[0].name}</p>
            <button name="delete" onClick={handleDelete}>X</button>
        </div>
       
    )

}

export default ShoeCard;