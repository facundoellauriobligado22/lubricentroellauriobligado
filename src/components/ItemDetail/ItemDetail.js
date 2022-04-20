import { useState, useContext } from "react"; /* Importamos para consumir context*/
import Counter from "../ItemCounter/ItemCounter";
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext"; /*Importamos la referencia*/ 




const ItemDetail = ({ id, tittle, description, price, pictureUrl, stock }) => {

    const {addItem, isInCart} = useContext(CartContext)

   /* const ShowTheCart = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
        setCantidad(quantity)
      }*/

    const handleAdd = (count) =>{

        const productObj = {
            id, tittle, price
        }

        addItem({...productObj, quantity: count})
        /*Aca solo le pasamos el objeto por props, agregando la cantidad */
    }


    return (
        <div className="container card col-3 mt-3 mr-5-4" style={{width: "18rem;"}}>
            <img src={pictureUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{tittle}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Precio: $ {price}</p>
                    <p className="card-text">Stock: {stock}</p>
                    <div className="d-grid gap-2">
                    { isInCart(id) ?  <Link to='/Cart'> <button type="button" class="btn btn-danger">Ir al carrito</button></Link> :
                    <Counter stock={stock} initial={0} onAdd={handleAdd}/>}
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail

