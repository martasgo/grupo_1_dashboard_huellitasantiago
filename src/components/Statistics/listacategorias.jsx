import { useEffect, useState } from "react";

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
        listCategorias.push(<li key={categoria} >
           {categoria}:{productos.countByCategory[categoria]}
         </li>);
    }

  return (
    <ul>
        {listCategorias}
    </ul>
  )  

 }

 export default Categories;