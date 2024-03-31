import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Productos from "./Productos/Productos";
import DetalleProducto from "./Productos/DetalleProducto";
import LastProduct from "./Productos/LastProduct";
import Clientes from "./Usuarios/Usuarios";
import Statistics from "./Statistics/Statistics";
import Error404 from "./Error404";

export default function ContentWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/productos" exact element={<Productos />} />
          <Route path="/productos/:idProd" exact element={<DetalleProducto />} />
          <Route path="/lastproduct" exact element={<LastProduct />} />
          <Route path="/usuarios" exact element={<Clientes />} />          
          <Route
            path="/statistics"
            element={
              <Statistics />
            }
          />
          <Route component={Error404} />
        </Routes>
      </main>
    </>
  );
}
