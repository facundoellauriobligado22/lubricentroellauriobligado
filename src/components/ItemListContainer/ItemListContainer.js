import { useEffect, useState } from "react";
import { getProducts } from "../../asynmock";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        })
    }, [categoryId])

    return (
        <div>
            <ul>
                <ItemList products={products} />
            </ul>
        </div>
    )
}

export default ItemListContainer;