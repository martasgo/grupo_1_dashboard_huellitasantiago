import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import style from "./DetalleProducto.module.css"

export default function DetalleProducto (){
    let { idProd } = useParams();
    const [infoProd, setinfoProd] = useState([]);

    useEffect(()=> {       
            fetch(`http://localhost:3000/api/products/${idProd}`)
              .then((respuesta) => respuesta.json())
              .then((products) => {
                setinfoProd(products);
            })
            .catch (error => console.error(error));
          }, [])   
    
 return(
    <div>
        <h2 className={style.textDetail}><strong>Detalle producto:</strong></h2>
        <br/>
        <p className={style.detailProd}><strong>Nombre:</strong>{infoProd.nombre}</p>        
        <p className={style.detailProd}><strong>Descripción:</strong> {infoProd.descripcion}</p>
        <p className={style.detailProd}><strong>Precio:</strong>  ${infoProd.precio}</p>
        <p className={style.detailProd}><strong>Marca:</strong>  {infoProd.marca}</p>
        <p className={style.detailProd}><strong>Categoria:</strong>  {infoProd.categoria}</p>
        <p className={style.detailProd}><strong>SubCategoria:</strong>  {infoProd.subcategoria}</p>
        <p className={style.detailProd}><strong>Mascotas:</strong>  {infoProd.mascota}</p>
        <p className={style.detailProd}><strong>Presentación:</strong>  {infoProd.presentacion}</p>
        <p className={style.detailProd}><strong>Tamaño mascota:</strong>  {infoProd.tamanio_mascota}</p>
        <p className={style.detailProd}><strong>Edad Mascota:</strong>  {infoProd.edad_mascota}</p>
        <p className={style.detailProd}><strong>Descuento:</strong>  {infoProd.descuento}</p>    
            
        <div className="box-avatar">
            <img src={`http://localhost:3000/images/productos/${infoProd.imagen}`} alt=""/>
        </div>
    </div>
 )
}