import { useEffect, useState } from "react";
import Categories from './ListaCategorias';
import style from './Statistics.module.css';
import Ventas from '../Ventas/Ventas';

function Statistics(){
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [totalProperties, setTotalProperties] = useState(0);
    const [ventas, setVentas] = useState([]);

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
    
    useEffect(()=> {
        fetch("http://localhost:3000/api/sales")
            .then((respuesta) => respuesta.json())
            .then((result) => {setVentas(result)})
            .catch (error => console.error (error));
            },[])

    return(        
        <section className="content">
            <h2 className={style.titleStatistic}>Estadísticas generales de usuarios y productos</h2>
            <br/>
            <section className={style.contentStatistic}>
             <div className={`${style.infoBoxes} ${style.box}`}>
                <div className={style.infoBox}>
                    <div className={style.boxIcon}>
                        <i className={`bi bi-basket ${style.iconos}`}></i>
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
                    <i className={`bi bi-list-stars ${style.iconos}`} ></i>
                    </div>

                    <div className={style.boxContent}>
                        <span className={style.big}>{totalProperties}</span>
                        <hr/>
                        <p className={style.textStatistic}><b>Total de categorías</b></p>
                    </div>
                </div>
           </div>
           <div className={`${style.infoBoxes} ${style.box}`}>
                <div className={style.infoBox}>
                    <div className={style.boxIcon}>
                        <i className={`bi bi-people ${style.iconos}`} ></i>
                    </div>

                    <div className={style.boxContent}>
                        <span className={style.big}>{usuarios.count}</span>
                        <hr/>
                        <p className={style.textStatistic}><b>Total de usuarios</b></p>
                    </div>
                </div>
           </div>
           </section>
           
           <hr/>
           <h2 className={style.textStatistic}>Cantidad de productos por categoría</h2>
           <br/>
           <Categories/>

           <hr/>
           <section>
            <div>
                <h2 className={style.textStatistic}>Estadísticas de ventas</h2>
                <br/>
                <Ventas />
            </div>
           </section>
        </section>       
    )
}

export default Statistics;

