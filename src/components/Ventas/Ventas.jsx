import { useEffect, useState } from "react";
import style from "./Ventas.module.css";

function Ventas() {
    const [sales, setSales] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/api/sales')
        .then((respuesta) => respuesta.json())
        .then((sales) => setSales(sales))
        .catch((error) => console.error(error));
    }, []);
   
  
    return (    
        <div className={style.divGeneralVentas}>
            <div className={style.divDatosVentas}>
                <div className={style.divVentas}>
                    <span className={style.dataVentas}>{sales.totalItems}</span>
                    <hr/>
                    <p className={style.textVentas}><i class="fas fa-cat" style={{fontSize: "2.5rem", color: "#6dbd9bff"}}></i><b>Total de productos vendidos</b></p>
                </div>
                <div className={style.divVentas}>
                    <span className={style.dataVentas}>$ {sales.totalSales}</span>
                    <hr/>
                    <p className={style.textVentas}><i class="fas fa-hand-holding-usd" style={{fontSize: "2.5rem", color: "#6dbd9bff", marginRight: "1.5px"}}></i><b>Monto total de ventas</b></p>
                </div>
            </div>
            
            <div className={style.divListados}>
                <p className={style.textVentas}><i class="far fa-star" style={{fontSize: "2.5rem", color: "#6dbd9bff", marginRight: "1.5rem"}}></i><b>5 Productos más vendidos</b></p>
                <hr/>
                <div>
                {sales && sales.totalProducts && sales.totalProducts.length > 0 ? (
                    sales.totalProducts.map((productData) => (
                    <div key={productData.id_product} className={style.divMasVendido}>
                        <p>ID Producto: {productData.id_product}</p>
                        <p>Total Cantidad: {productData.total_cantidad}</p>
                        <p>Nombre: {productData.product.nombre}</p>
                    </div>
                    ))
                ) : (
                    <p>No hay datos de ventas disponibles.</p>
                )}
                </div>
            </div>
            <div className={style.divListados}>
                <p className={style.textVentas}><i class="fas fa-calendar-alt" style={{fontSize: "2.5rem", color: "#6dbd9bff", marginRight: "1.5rem"}}></i><b>Últimos 5 productos vendidos</b></p>
                <hr/>
                <div>
                {sales && sales.lastSoldProducts && Object.values(sales.lastSoldProducts).length > 0 ? (
                    Object.values(sales.lastSoldProducts).map((productData) => (
                    <div key={productData.id} className={style.divMasVendido}>
                        <p>ID Producto: {productData.product.id}</p>
                        <p>Nombre: {productData.product.nombre}</p>
                    </div>
                    ))
                ) : (
                    <p>No hay datos de ventas disponibles.</p>
                )}
                </div>
            </div>
        </div>
    );
  }
  
  export default Ventas;