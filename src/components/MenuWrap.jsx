import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import style from "./MenuWrap.module.css";

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
                            <i className={`bi bi-house ${style.iconos}`} ></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/statistics">
                            <i className={`bi bi-graph-up ${style.iconos}`} ></i>
                            - Estadísticas
                        </Link>
                    </li>
                    <li>
                        <Link to="/usuarios">
                            <i className={`bi bi-person ${style.iconos}`}></i>
                            - Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link to="/lastuser">
                            <i className={`bi bi-skip-end ${style.iconos}`}  ></i>
                            - Último Usuario
                        </Link>
                    </li> 
                    <li>
                        <Link to="/productos">
                            <i className={`bi bi-basket ${style.iconos}`}  ></i>
                            - Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/lastproduct">
                            <i className={`bi bi-skip-end ${style.iconos}`}  ></i>
                            - Último Producto
                        </Link>
                    </li>        
                    
                </ul>
            </section>
        </nav>
    </header>
    )    
}