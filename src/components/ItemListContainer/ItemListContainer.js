import { useEffect, useState } from "react";
// import { getProducts } from "../../asynmock";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../Services/firebase";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        // getProducts(categoryId).then(prods => {
        //     setProducts(prods)
        // })

        const collectionRef = categoryId 
        ? query(collection(firestoreDb , 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
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