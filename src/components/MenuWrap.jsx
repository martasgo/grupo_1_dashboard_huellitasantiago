import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function MenuWrap() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
            <Link to="/movies"> 
                <img src={logo} alt="Logo Huellitas"/>
            </Link>            
            </div>
            <figcaption>
                Huellitasantiago
            </figcaption>
            
        </figure>
        <nav>
            <section className="dicover">
                <h3>Opciones</h3>
                <ul>
                <li>
                    <Link to="/">
                            <i className="bi bi-house" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuarios">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/lastproduct">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Ultimo Producto
                        </Link>
                    </li>
                    <li>
                        <Link to="/maspopulares">
                            <i className="bi bi-bar-chart"></i>
                            - Más populares
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-tags"></i>
                            - Promociones
                        </a>
                    </li>
                    <li>
                        <Link to="/statistics">
                            <i className="bi bi-graph-up"></i>
                            - Estadísticas
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}