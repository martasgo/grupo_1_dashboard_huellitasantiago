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
        <br />
        {pagina > 1 && (
          <button onClick={previousPage}>Página Anterior</button>
        )}
        <br />
        <br />
        {articulos.length === 10 && (
          <button onClick={nextPage}>Página Siguiente</button>
        )}
      </section>
    </main>
  );
}

export default Productos;
