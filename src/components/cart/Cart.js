import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div  className="container">
                <div>
                    <h1 className="mx-auto"> No hay productos agregados</h1>
                </div>
                <div>
                <Link to='/list'><button className="btn btn-warning"> Regresar al listado</button> </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <ul className="list-group-item list-group-item-action">
                {

                    cart.map(prod =>
                        <li key={prod.id} className="list-group-item">
                            {prod.tittle} cantidad: {prod.quantity} precio uni: {prod.price} subtotal: {prod.quantity * prod.price}
                            <button className="btn btn-danger d-flex" onClick={() => removeItem(prod.id)}> X </button>
                        </li>)
                }

            </ul>
            <button className="btn btn-success"> Terminar mi compra</button>
        </div>
    )

}

export default Cart
