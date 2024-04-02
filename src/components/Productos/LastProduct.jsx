import { useEffect, useState } from "react";
import style from "./LastProduct.module.css";

export default function LastProduct(){
    const [lastProduct, setLastProduct] = useState(0);
    let categoriaProd = [];

    useEffect(()=> {
      fetch("http://localhost:3000/api/lastproduct")
        .then((respuesta) => respuesta.json())
        .then((product) => setLastProduct(product))
        .catch (error => console.error(error));
    },[])

    let categoryName;
    if (lastProduct && lastProduct.categories) {
        categoryName = lastProduct.categories.nombre;
    }

    return(
        <div className={style.container}>
            <h3 className={style.titleLastProd}><strong>Último producto creado:</strong></h3>
            <p className={style.nameLastProd}>{lastProduct.nombre}</p>
            <p className={style.description}><strong>Descripción:</strong> {lastProduct.descripcion}.</p>
            <p className={style.description}><strong>Categoría: </strong>{categoryName}</p> 
            <p>
                <a href={`/productos/${lastProduct.id}`} className={style.detailLink}>Ver más detalle</a>
            </p>
        </div>
    )
}