import { useState } from "react";
import Counter from "../ItemCounter/ItemCounter";
import { Link } from 'react-router-dom'




const ItemDetail = ({ tittle, description, price, pictureUrl, stock }) => {
    const [cantidad, setCantidad] = useState(0)


    const ShowTheCart = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
        setCantidad(quantity)
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
                    { cantidad > 0 ?  <Link to='/Cart'> <button type="button" class="btn btn-danger">Ir al carrito</button></Link> :
                    <Counter stock={stock} initial={0} onAdd={ShowTheCart}/>}
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail

