function ShoeCard({stores, shoe, inventory, setInventory}) {

    let store = stores.filter(store => store.id == shoe.shoe_store_id)

    function handleDelete(e) {
        const newInventory = inventory.filter(item => item.id != shoe.id)
        fetch(`http://localhost:9292/shoes/${shoe.id}`, {
            method: 'DELETE',
            })
            .then(resp => resp.json())
            .then(() => {
                setInventory(newInventory)
                
            });
    }

    function changePrice(e) {
        //e.preventDefault()

        fetch(`http://localhost:9292/shoes/${shoe.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({price: e.target.children[0].value}),
            })
            .then(resp => resp.json())
            .then((newShoe) => {
                console.log(newShoe)   
                setInventory((inventory) => inventory)         
            });

    }

    return (
        <div>
            <p>{shoe.name}, style: {shoe.style}, price: {shoe.price} color: {shoe.color} store: {store[0].name}</p>
            <button name="delete" id={store[0].id} onClick={handleDelete}>X</button>
            <form onSubmit={changePrice}>
                <input name="edit-price" type="number"></input>
                <input type="submit" value="Change Price"/>
            </form>
            
        </div>
       
    )

}

export default ShoeCard;