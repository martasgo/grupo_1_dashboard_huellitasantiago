import { useEffect, useState } from "react";
import ListadoProd from "./ListadoProd";
import style from "./Productos.module.css";

function Productos() {
  const [articulos, setArticulos] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products?page=${pagina}&pageItems=10`)
      .then((respuesta) => respuesta.json())
      .then((products) => setArticulos(products.products))
      .catch((error) => console.error(error));
  }, [pagina]);

  const previousPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const nextPage = () => {
    if (articulos.length === 10) {
      setPagina(pagina + 1);
    }
  };

  return (    
      <section className={style.contentProduct}>        
        <h2 className={style.titleProd}>Listado de productos</h2>
              <br/>
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
        <br />
        <div className={style.buttonContainer}>
        {pagina > 1 && (
          <button className={style.prevButton}
          disabled={pagina === 1} onClick={previousPage}>Página Anterior</button>
        )}
        <br />
        <br />
        {articulos.length === 10 && (
          <button className={style.nextButton} onClick={nextPage}>Página Siguiente</button>
        )}
        </div>
      </section>    
  );
}

export default Productos;