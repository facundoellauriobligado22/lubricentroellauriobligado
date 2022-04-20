import { createContext, useState } from 'react'; /* Estamos creando un custom context*/

const CartContext = createContext() /*Acá lo creamos (La burbuja)*/

export const CartContextProvider = ({ children }) => { /* Creamos un componente que envuelve componente y los recibimos por children*/
    /*Lo exportamos como export nombrado*/
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
        /*Aca agregamos un objeto a nuestro arrays de objetos para el carrito */
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        /* Aca con el for recorremos el array de objetos del carrito par saber la cantidad total que tenemos y la consumimos en el widgetCart */
        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
        /* Con el some pregunta si hay alguno con ese id*/
    }

    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
        /*Recorremos el arreglo y pisamos a todos los que no coinciden con ese id en el mismo arreglo*/
    }

    return (

        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )

    /*Generamos un nuevo componente provider que dentro va estar el provider de la burbuja
    y lo que recibo lo paso como hijo del provider y al value seteo un estate para guardar valores*/
}

export default CartContext