import { useEffect, useState } from "react";
import ListadoUsuarios from "./ListadoUsuarios";
import style from "./Usuarios.module.css";

function Usuarios(){
const [usuarios, setUsuarios] = useState([]);
const [allUsers, setAllUsers] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(()=> {
    fetch(`http://localhost:3000/api/users?page=${pagina}&pageUsers=2`)
      .then((respuesta) => respuesta.json())
      .then((result) => setUsuarios(result.users))
      .catch((error) => console.error(error));
  },[pagina]);

  useEffect(()=> {
    fetch('http://localhost:3000/api/lastuser')
      .then((respuesta) => respuesta.json())
      .then((result) => setAllUsers(result.allUsers))
      .catch((error) => console.error(error));
  },[]);
  
  let firsLastId = null;
  if (usuarios.length > 0) {
    let firstLastUser = usuarios[usuarios.length - 1];
    firsLastId = firstLastUser.id;
  }

  let secondLastId = null;
  if (allUsers.length > 0) {
    let secondLastUser = allUsers[allUsers.length - 1];
    secondLastId = secondLastUser.id;
  }

  const previousPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const nextPage = () => {
    if (firsLastId < secondLastId) {
      setPagina(pagina + 1);
    }
  };
    
return (
    <section className={style.contentUsers}>
       <h2 className={style.listTitle}>Listado de usuarios</h2>        
        {usuarios.map((user) => (
            <ListadoUsuarios usuario={user} key={user.id} />
        ))}
        <br />
        <div className={style.buttonContainerUser}>
        {pagina > 1 && (
          <button className={style.prevButtonUser}
          disabled={pagina === 1} onClick={previousPage}>Página Anterior</button>
        )}
        <br />
        <br />
        {firsLastId < secondLastId && (
          <button className={style.nextButtonUser} onClick={nextPage}>Página Siguiente</button>
        )}
        </div>
    </section>
  )
}

export default Usuarios;