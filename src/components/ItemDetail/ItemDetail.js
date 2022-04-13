import Counter from "../ItemCounter/ItemCounter";


const ShowTheCart = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
  }

const ItemDetail = ({ tittle, description, price, pictureUrl, stock }) => {
    return (
        <div className="container card col-3 mt-3 mr-5-4" style={{width: "18rem;"}}>
            <img src={pictureUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{tittle}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Precio: $ {price}</p>
                    <p className="card-text">Stock: {stock}</p>
                    <div className="d-grid gap-2">
                    <Counter stock={stock} initial={0} onAdd={ShowTheCart}/>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail

