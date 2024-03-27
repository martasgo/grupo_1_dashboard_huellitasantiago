import { useEffect, useState } from "react";
import ListadoProd from "./ListadoProd";
import style from "./Productos.module.css";

function Productos(){
const [articulos, setArticulos] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/api/products")
      .then((respuesta) => respuesta.json())
      .then((products) => 
        setArticulos(products.products)
      );
  },[]
)
    
return (
<main className="content-wrap">
            <section className="content">
              <h2 className="mt-3">Listado de productos</h2>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                {articulos.map((articulo) => (
                  <ListadoProd producto={articulo} key={articulo.id} />
                ))}
              </table>
            </section>
          </main>
  )
}

export default Productos;