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
            <>
                <p className={style.titleDetail} ><strong>Detalles de usuario</strong></p>
                <br/>
                <p className={style.textUser} ><strong>Dirección:</strong> {usuario.direccion}</p>
                <p className={style.textUser}><strong>Teléfono:</strong> {usuario.telefono}</p>
                <p className={style.textUser} ><strong>Categoría:</strong> { usuario.categoria === 1 ? 'Administrador' : 'Cliente'}</p>
                <br/>
                <img className={style.resizeImg} src={`http://localhost:3000/images/usuarios/${usuario.imagen}`} alt=""/>
            </>

      )
    }

export default DetalleUsuario;