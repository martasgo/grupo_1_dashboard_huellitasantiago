
import { useEffect, useState } from "react";
import Categories from './listacategorias';

function Statistics(){
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [totalProperties, setTotalProperties] = useState(0);

      useEffect(()=> {
        fetch("http://localhost:3000/api/products")
          .then((respuesta) => respuesta.json())
          .then((products) => {
                // Guardar los datos JSON en el estado
                setProductos(products)
                // Calcular el total de propiedades
                const propertiesCount = Object.keys(products.countByCategory).length;
                setTotalProperties(propertiesCount);
                
          }
          )
          .catch (error => console.error (error));
          },[]
      )

      useEffect(()=> {
        fetch("http://localhost:3000/api/users")
          .then((respuesta) => respuesta.json())
          .then((result) => {setUsuarios(result)})
          .catch (error => console.error (error));
          },[]
      )

    return(
        <main className="content-wrap">
        <section className="content">
            <h2 className="mt-3">Estadísticas</h2>
            <div className="info-boxes">
                <div className="info-box">
                    <div className="box-icon">
                        <i className="bi bi-film" ></i>
                    </div>

                    <div className="box-content">
                        <span className="big">{productos.count}</span>
                        Total de productos
                    </div>
                </div>
           </div>
           <div className="info-boxes">
                <div className="info-box">
                    <div className="box-icon">
                        <i className="bi bi-film" ></i>
                    </div>

                    <div className="box-content">
                        <span className="big">{totalProperties}</span>
                        Total de categorias
                    </div>
                </div>
           </div>
           <div className="info-boxes">
                <div className="info-box">
                    <div className="box-icon">
                        <i className="bi bi-film" ></i>
                    </div>

                    <div className="box-content">
                        <span className="big">{usuarios.count}</span>
                        Total de Usuarios
                    </div>
                </div>
           </div>

           <h2 className="mt-3">DETALLE CATEGORIAS</h2>
           <Categories/>

        </section>
        </main>
    )
}

export default Statistics;

