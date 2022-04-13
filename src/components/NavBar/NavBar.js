import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

const NavBar = () => {

    const { categoryId } = useParams
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <img src='./images/oil.png' style={{ width: 30 }} />
                <Link to='/'> <a className="navbar-brand" href="#">LubricentroWere</a> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/list'>
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/aceite"}>
                                <a className="nav-link" aria-current="page" href="#">Aceites</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Filtro"}>
                                <a className="nav-link" href="#">Filtros</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Servicios"}>
                                <a className="nav-link" href="#">Servicios</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <CartWidget></CartWidget>
            </div>
        </nav>
    )
}

export default NavBar;