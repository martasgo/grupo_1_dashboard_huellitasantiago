import { useEffect, useState } from "react";
import Categories from './ListaCategorias';
import style from './Statistics.module.css';

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
          })
          .catch (error => console.error (error));
          },[])

      useEffect(()=> {
        fetch("http://localhost:3000/api/users")
          .then((respuesta) => respuesta.json())
          .then((result) => {setUsuarios(result)})
          .catch (error => console.error (error));
          },[])
    return(        
        <section className="content">
            <h2 className={style.titleStatistic}>Estadísticas</h2>
            <br/>
            <section className={style.contentStatistic}>
             <div className={`${style.infoBoxes} ${style.box}`}>
                <div className={style.infoBox}>
                    <div className={style.boxIcon}>
                        <i className="bi bi-basket" style={{fontSize: "2.5rem", color: "#6dbd9bff"}}></i>
                    </div>

                    <div className={style.boxContent}>
                        <span className={style.big}>{productos.count}</span>
                        <hr/>
                        <p className={style.textStatistic}><b>Total de productos</b></p>
                    </div>
                </div>
           </div>
           <div className={`${style.infoBoxes} ${style.box}`}>
                <div className={style.infoBox}>
                    <div className={style.boxIcon}>
                    <i className="bi bi-list-stars" style={{fontSize: "2.5rem", color: "#6dbd9bff"}}></i>
                    </div>

                    <div className={style.boxContent}>
                        <span className={style.big}>{totalProperties}</span>
                        <hr/>
                        <p className={style.textStatistic}><b>Total de categorias</b></p>
                    </div>
                </div>
           </div>
           <div className={`${style.infoBoxes} ${style.box}`}>
                <div className={style.infoBox}>
                    <div className={style.boxIcon}>
                        <i className="bi bi-people" style={{fontSize: "2.5rem", color: "#6dbd9bff"}}></i>
                    </div>

                    <div className={style.boxContent}>
                        <span className={style.big}>{usuarios.count}</span>
                        <hr/>
                        <p className={style.textStatistic}><b>Total de Usuarios</b></p>
                    </div>
                </div>
           </div>
           </section>
           <hr/>
           <h2 className={style.textStatistic}>Detalle Categorías</h2>
           <br/>
           <Categories/>
        </section>       
    )
}

export default Statistics;

