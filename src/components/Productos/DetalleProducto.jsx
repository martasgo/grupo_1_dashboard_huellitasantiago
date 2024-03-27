import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";

export default function DetalleProducto (){
    let { idProd } = useParams();
    const [infoProd, setinfoProd] = useState([]);

    useEffect(()=> {       
            fetch(`http://localhost:3000/api/products/${idProd}`)
              .then((respuesta) => respuesta.json())
              .then((products) => setinfoProd(products));
          },[]
    )
          
    console.log(infoProd);
 return(
    <div>
        <h2>Detalle producto: {infoProd.nombre}</h2>
        <ul>
            <li>Descripción:  {infoProd.descripcion}</li>
            <li>Precio:  ${infoProd.precio}</li>
            <li>Marca:  {infoProd.marca}</li>
            <li>Categoria:  {infoProd.categoria}</li>
            <li>SubCategoria:  {infoProd.subcategoria}</li>
            <li>Mascotas:  {infoProd.mascota}</li>
            <li>Presentación:  {infoProd.presentacion}</li>
            <li>Tamaño mascota:  {infoProd.tamanio_mascota}</li>
            <li>Edad Mascota:  {infoProd.edad_mascota}</li>
            <li>Descuento:  {infoProd.descuento}</li>
            <li>Imagen</li>
            <div className="box-avatar">
                <img src={`http://localhost:3000/images/productos/${infoProd.imagen}`} alt=""/>
            </div>

        </ul>
    </div>
 )

}