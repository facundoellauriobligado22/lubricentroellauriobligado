import { useEffect, useState } from "react";
// import { getProductsById } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../Services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([])
    const {productId} = useParams()

    useEffect(() => {
        // getProductsById(params.productId).then(prods => {
        //     setProducts(prods)
        // })

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = {id: response.id, ...response.data() }
            setProducts(product)
        })
    }, [productId])

    return (
        <div>
            <ul>
                <ItemDetail {...products} />
            </ul>
        </div>
    )
}

export default ItemDetailContainer;