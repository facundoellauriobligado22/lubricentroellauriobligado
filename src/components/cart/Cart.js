import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../Services/firebase/index'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
    const addDocToCollection = () => {
        const collectionRef = collection(firestoreDb, 'User')
    }

    if (cart.length === 0) {
        return (
            <div className="container">
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
                            <div>
                                {prod.pcitureUrl} {prod.tittle} cantidad: {prod.quantity} precio uni: {prod.price} subtotal: {prod.quantity * prod.price}
                            </div>
                            <div>
                                <button className="btn btn-danger d-flex" onClick={() => removeItem(prod.id)}> X </button>
                            </div>

                        </li>)
                }

            </ul>
            <Link to='/Form' ><button className="btn btn-success"> Finalizar compra</button></Link>
        </div>
    )

}

export default Cart
