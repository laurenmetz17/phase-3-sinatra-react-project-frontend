function ShoeCard({shoe}) {

    return (
        <p>{shoe.name}, style: {shoe.style}, price: {shoe.price} color: {shoe.color} store: {shoe.shoe_store_id}</p>
    )

}

export default ShoeCard;