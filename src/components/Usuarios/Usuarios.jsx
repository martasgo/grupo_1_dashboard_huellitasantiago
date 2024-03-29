import { useEffect, useState } from "react";
import ListadoUsuarios from "./ListadoUsuarios";
import style from "./Usuarios.module.css";

function Usuarios(){
const [usuarios, setUsuarios] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(()=> {
    fetch(`http://localhost:3000/api/users?page=${pagina}&pageUsers=2`)
      .then((respuesta) => respuesta.json())
      .then((result) => setUsuarios(result.users))
      .catch((error) => console.error(error));
  },[pagina]);

  const previousPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const nextPage = () => {
    if (usuarios.length === 2) {
      setPagina(pagina + 1);
    }
  };
    
return (
    <section className="content">
        <h2 className="mt-3">Listado de usuarios</h2>
        
        {usuarios.map((user) => (
            <ListadoUsuarios usuario={user} key={user.id} />
        ))}

        <br />
        {pagina > 1 && (
          <button onClick={previousPage}>Página Anterior</button>
        )}
        <br />
        <br />
        {usuarios.length === 2 && (
          <button onClick={nextPage}>Página Siguiente</button>
        )}

    </section>
  )
}

export default Usuarios;