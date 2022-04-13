import { Link } from "react-router-dom"

const Item = ({ id,tittle, description, price, pictureUrl }) => {
    return (
        <div className="card col-3 mt-3 mr-5-4" style={{ width: "18rem;" }}>
            <img src={pictureUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <p className="card-text">Precio: ${price}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <Link to={`/detail/${id}`}>
                        <a className="btn btn-primary ">Ver detalle del producto</a>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Item