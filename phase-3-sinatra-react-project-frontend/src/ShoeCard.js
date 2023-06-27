import {useState} from 'react'

function ShoeCard({stores, shoe, inventory, setInventory, totalInventory}) {

    const [price, setPrice] = useState(0)
    const store = stores.filter(store => store.id == shoe.shoe_store_id)[0].name

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
        e.preventDefault()
        e.target.children[0].value = ''

        fetch(`http://localhost:9292/shoes/${shoe.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({price: price}),
            })
            .then(resp => resp.json())
            .then((newShoe) => {
                const newInventory = inventory.map(shoe => shoe.id == newShoe.id? newShoe : shoe)   
                
                setInventory(newInventory)         
            });
    }

    function updatePrice(e) {
        setPrice(parseInt(e.target.value))
    }

    return (
        <div>
            <p>{shoe.name}, style: {shoe.style}, price: {shoe.price}, color: {shoe.color}, store: {store}</p>
            <button name="delete" onClick={handleDelete}>X</button>
            <form onSubmit={changePrice}>
                <input name="edit-price" type="number" onChange={updatePrice}></input>
                <input type="submit" value="Change Price"/>
            </form>
            
        </div>
       
    )

}

export default ShoeCard;