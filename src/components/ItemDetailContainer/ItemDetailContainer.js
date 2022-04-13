import { useEffect, useState } from "react";
import { getProductsById } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
    const [ products, setProducts ] = useState([])
    const params = useParams()
    console.log(params)

    useEffect(() => {
        getProductsById(params.productId).then(prods => {
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