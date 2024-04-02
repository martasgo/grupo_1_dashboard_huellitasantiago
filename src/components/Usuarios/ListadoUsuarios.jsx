import DetalleCliente from "./DetalleUsuario"
import style from "./ListadoUsuarios.module.css"

export default function ListadoUsuarios(props) {
    return(
        <div className={style.userListContent}>
            <ul className={style.userList}>
                <li className={style.userItem}>                     
                    <p className={style.textUser}><strong>Usuario Nro:</strong> {props.usuario.id}</p>
                    <p className={style.textUser}> {props.usuario.name} {props.usuario.apellido} - <strong>Email:</strong> {props.usuario.email}</p>
                    <br/>
                    <DetalleCliente link={props.usuario.detail} key={props.usuario.id}/> 
                </li>                
            </ul>
            <br/>            
        </div>        
     )
}