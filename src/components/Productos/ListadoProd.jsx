import style from "./ListadoProd.module.css"
export default function ListadoProd(props){
    return(
        <>
            <tr>
                <td>{props.producto.id}</td>
                <td>{props.producto.name}</td>
                <td>{props.producto.categories[0].nombre}</td>
                <td><a href={`/productos/${props.producto.id}`} className={style.linkDetalle}>detalle</a></td>
            </tr>
        </>
    )
}
