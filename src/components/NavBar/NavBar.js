import './NavBar.css'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Lubricentro Were</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Aceites</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Filtros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Servicios</a>
                        </li>
                    </ul>
                </div>
                <form class="d-flex">
                    <button class="btn btn-outline-success" type="submit">Ingresar</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;