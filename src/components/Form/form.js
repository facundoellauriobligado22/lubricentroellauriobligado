import React, { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { firestoreDb } from '../../Services/firebase/index'
import Swal from 'sweetalert2'

const Form = () => {
  const Swal = require('sweetalert2')

  const [buyer, setBuyer] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  })

  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value
    })
    console.log(buyer)
  }

  const [loading, setLoading] = useState()

  const { cart, removeItem } = useContext(CartContext)


  const createOrder = () => {
    setLoading(true)

    const objOrder = {
      items: cart,
      buyer,
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `El id de la orden es ${id}`,
          showConfirmButton: false,
          timer: 2500
        })
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
  }

  if (loading) {
    return <h1> Se esta generando la orden</h1>
  }
  const addDocToCollection = () => {
    const collectionRef = collection(firestoreDb, 'User')
  }
  return (

    <form className="container">
      <br></br>
      <h1> Datos del pedido</h1>
      <br></br>
      <br></br>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Nombre:</label>
        <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Apellido:</label>
        <input type="text" className="form-control" name="apellido" onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Telefono:</label>
        <input type="number" className="form-control" name="telefono" onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => createOrder()} >Generar Orden</button>
    </form>
  )
}

export default Form