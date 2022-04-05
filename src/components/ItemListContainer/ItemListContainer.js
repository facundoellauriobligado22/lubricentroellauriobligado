import { useEffect, useState } from "react";
import { getProducts } from "../../asynmock";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    }, [])

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ul>
                <ItemList products={products}/>
            </ul>
        </div>
    )
}

export default ItemListContainer;