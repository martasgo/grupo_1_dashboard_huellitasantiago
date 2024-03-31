import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function MenuWrap() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
            <Link to="/"> 
                <img src={logo} alt="Logo Huellitas"/>
            </Link>            
            </div>
            <figcaption>
                Huellitasantiago
            </figcaption>
            
        </figure>
        <nav>
            <section className="dicover">
                <h3 style={{color: "black"}}>Opciones</h3>
                <ul>
                <li>
                    <Link to="/">
                            <i className="bi bi-house" style={{fontSize: "1.2rem", color: "#18c1d8ff"}}></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuarios">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "#18c1d8ff"}}></i>
                            - Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos">
                            <i className="bi bi-basket" style={{fontSize: "1.2rem", color: "#18c1d8ff"}}></i>
                            - Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/lastproduct">
                            <i className="bi bi-skip-end" style={{fontSize: "1.2rem", color: "#18c1d8ff"}}></i>
                            - Último Producto
                        </Link>
                    </li>        
                    <li>
                        <Link to="/statistics">
                            <i className="bi bi-graph-up" style={{fontSize: "1.2rem", color: "#18c1d8ff"}}></i>
                            - Estadísticas
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )    
}