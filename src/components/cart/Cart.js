import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../Services/firebase/index'

const Cart = () => {

    const [loading, setLoading] = useState()

    const { cart, removeItem } = useContext(CartContext)


    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Facundo Ellauri Obligado',
                phone: '3512289235',
                email: 'facuellauri@hotmail.com'
            },
            total: 3,
            date: new Date()

        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <h1> Se esta generando orden</h1>
    }
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
                            {prod.tittle} cantidad: {prod.quantity} precio uni: {prod.price} subtotal: {prod.quantity * prod.price}
                            <button className="btn btn-danger d-flex" onClick={() => removeItem(prod.id)}> X </button>

                            
                        </li>)
                }

            </ul>
            <button className="btn btn-warning d-flex" onClick={() => createOrder()}> Generar Orden </button>
            <button className="btn btn-success"> Terminar mi compra</button>
        </div>
    )

}

export default Cart
