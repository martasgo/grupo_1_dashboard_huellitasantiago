import { useEffect, useState } from "react";
import style from "./DetalleUsuario.module.css"

function DetalleUsuario(props){
    const [usuario, setUsuario] = useState([]);
    
      useEffect(()=> {
        console.log(props.link)
        fetch(`http://${props.link}`)
          .then((respuesta) => respuesta.json())
          .then((result) => 
          setUsuario(result))
          .catch((error) => console.error(error));
      },[]);
        
    return (
            <section className={style.contentDetalleUsuario}>
                <img className={style.resizeImg} src={`http://localhost:3000/images/usuarios/${usuario.imagen}`} alt=""/>
            </section>

      )
    }

export default DetalleUsuario;