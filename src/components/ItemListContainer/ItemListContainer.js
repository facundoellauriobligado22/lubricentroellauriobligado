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
            <ul>
                <ItemList products={products}/>
            </ul>
        </div>
    )
}

export default ItemListContainer;