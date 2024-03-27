
import { useEffect, useState } from "react";

export default function LastProduct(){
    const [lastProduct, setLastProduct] = useState(0);

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
      
      return(
        <div>
             <h3>Ultimo producto creado: {lastProduct.name}</h3>
            <ul>
                <li>Descripción:  {lastProduct.description}</li>
             <li>Categoria:  {lastProduct.categories[0].nombre}</li> 
                <p></p>
                <p><a href={`/productos/${lastProduct.id}`}>Ver mas detalle</a></p>

            </ul>
        </div>
      )
     
}