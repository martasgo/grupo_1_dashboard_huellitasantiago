import { useEffect, useState } from "react";
import style from './ListaCategorias.module.css';

function Categories(){
    const [productos, setProductos] = useState([]);
    let listCategorias = [];
      
    useEffect(()=> {
        fetch("http://localhost:3000/api/products")
          .then((respuesta) => respuesta.json())
          .then((products) => {setProductos(products)}
          )
          .catch (error => console.error (error));
          },[]
      )

    for (const categoria in productos.countByCategory) {
        listCategorias.push(<li className={style.listDetalleCategorias} key={categoria} >
           <p className={style.textListCategorias}> <strong>{categoria}</strong>: {productos.countByCategory[categoria]}</p>
         </li>);
    }
  return (
    <ul>
        {listCategorias}
    </ul>
  )
 }

 export default Categories;