
import { useEffect, useState } from "react";

export default function LastProduct(){
    const [lastProduct, setLastProduct] = useState(0);
    let categoriaProd = [];

    useEffect(()=> {
      fetch("http://localhost:3000/api/products")
        .then((respuesta) => respuesta.json())
        .then((products) => {
            let lastIndex = products.products.length;
            console.log(products.products);
            console.log('indice:', lastIndex-1);
            setLastProduct(products.products[lastIndex-1])
        })
    },[]
  )
  for (const categoria in lastProduct.categories) {
    categoriaProd.push(<li key={categoria.id} >
       Categoria :{lastProduct.categories[categoria].nombre}
     </li>);  
}
      return(
        <div>
             <h3>Ultimo producto creado: {lastProduct.name}</h3>
            <ul>
                <li >Descripción:  {lastProduct.description}</li>
                {categoriaProd}
                <p></p>
                <p><a href={`/productos/${lastProduct.id}`}>Ver mas detalle</a></p>

            </ul>
        </div>
      )
     
}