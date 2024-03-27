import DetalleCliente from "./DetalleUsuario"

export default function ListadoUsuarios(props) {
    return(
        <ul>
            <li> Usuario Nro: {props.usuario.id}</li>
            <p> {props.usuario.name} {props.usuario.apellido} - email: {props.usuario.email}</p>
            <DetalleCliente link={props.usuario.detail} key={props.usuario.id}/> 

        </ul>

        
     )
}