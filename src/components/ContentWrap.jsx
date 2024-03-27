import { Route, Routes } from "react-router-dom";

import Error404 from "./Error404";
import Movies from "./Movies/Movies";
import MasPopulares from "./MasPopulares/MasPopulares";
import Statistics from "./Statistics/Statistics";
import PreSales from "./PreSales/PreSales";
import Productos from "./Productos/Productos";
import DetalleProducto from "./Productos/DetalleProducto";
import LastProduct from "./Productos/LastProduct";
import Clientes from "./Usuarios/Usuarios";

export default function ContentWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/" exact element={<PreSales />} />
          <Route path="/productos" exact element={<Productos />} />
          <Route path="/productos/:idProd" exact element={<DetalleProducto />} />
          <Route path="/lastproduct" exact element={<LastProduct />} />
          <Route path="/usuarios" exact element={<Clientes />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/maspopulares" element={<MasPopulares />} />
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
