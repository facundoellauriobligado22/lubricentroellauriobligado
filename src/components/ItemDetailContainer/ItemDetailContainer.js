import { useEffect, useState } from "react";
import { getProductsById } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        getProductsById(5).then(prods => {
            setProducts(prods)
        })
    },[])

    return (
        <div>
            <ul>
                <ItemDetail {...products} />
            </ul>
        </div>
    )
}

export default ItemDetailContainer;