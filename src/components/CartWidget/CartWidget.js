import { useContext } from "react"
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext) 

    /* Aca traigo la funcion obtener cantidad indicandole que voy a utlizar el context de cartContext */
     return (
        <div>
            <form className="d-flex">
               <Link to='/Cart'> <button className="btn btn-primary" ><img src='./images/cart.png' style={{width:35}}/> 
                {getQuantity()}</button>  </Link>
            </form>
        </div>
                /*Si cuando consumimos la funcion le pongo los parentesis se vive ejecutando como nec */
    )
}

export default CartWidget