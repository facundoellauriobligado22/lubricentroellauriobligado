import { useContext } from "react"
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext) 
    /* Aca traigo la funcion obtener cantidad indicandole que voy a utlizar el context de cartContext */
    return (
        <div>
            <form className="d-flex">
                <button className="btn btn-primary" type="submit"><img src='./images/cart.png' style={{width:35}}/> 
                {getQuantity()}</button> 
            </form>
        </div>
                /*Si cuando consumimos la funcion le pongo los parentesis se vive ejecutando como nec */

    )
}

export default CartWidget