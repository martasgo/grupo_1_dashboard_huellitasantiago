import { useEffect, useState } from "react";
import style from "./DetalleUsuario.module.css"

function DetalleUsuario(props){
    const [usuario, setUsuario] = useState([]);
    
      useEffect(()=> {
        console.log(props.link)
        fetch(`http://${props.link}`)
          .then((respuesta) => respuesta.json())
          .then((result) => 
          setUsuario(result)
          );
      },[]
    )
        
    return (

            <section className="content">
                <img className={style.resizeImg} src={`http://localhost:3000/images/usuarios/${usuario.imagen}`} alt=""/>
            </section>

      )
    }

export default DetalleUsuario;