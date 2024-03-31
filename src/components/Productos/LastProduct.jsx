import { useEffect, useState } from "react";
import style from "./LastProduct.module.css";

export default function LastProduct(){
    const [lastProduct, setLastProduct] = useState(0);
    let categoriaProd = [];

    useEffect(()=> {
      fetch("http://localhost:3000/api/products")
        .then((respuesta) => respuesta.json())
        .then((products) => {
            let lastIndex = products.products.length;            
            setLastProduct(products.products[lastIndex-1]);
        })
        .catch (error => console.error(error));
    },[])

  for (const categoria in lastProduct.categories) {
    categoriaProd.push(<li style={{ listStyleType: 'none'}} key={categoria.id} >
      <p className={style.categProd}><strong>Categoría:</strong> {lastProduct.categories[categoria].nombre}</p>
     </li>);  
}
      return(
        <div className={style.container}>
            <h3 className={style.titleLastProd}><strong>Último producto creado:</strong></h3>
            <p className={style.nameLastProd}>{lastProduct.name}</p>
            <p className={style.description}><strong>Descripción:</strong> {lastProduct.description}.</p>
            <br/>
            {categoriaProd}
            
            <p>
                <a href={`/productos/${lastProduct.id}`} className={style.detailLink}>Ver más detalle</a>
            </p>
        </div>
    )
}