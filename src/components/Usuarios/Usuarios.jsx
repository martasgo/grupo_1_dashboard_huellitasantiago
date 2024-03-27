import { useEffect, useState } from "react";
import ListadoUsuarios from "./ListadoUsuarios";
import style from "./Usuarios.module.css";

function Usuarios(){
const [usuarios, setUsuarios] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/api/users")
      .then((respuesta) => respuesta.json())
      .then((result) => 
      setUsuarios(result.users)
      );
  },[]
)
    
return (
    <section className="content">
        <h2 className="mt-3">Listado de usuarios</h2>
        
        {usuarios.map((user) => (
            <ListadoUsuarios usuario={user} key={user.id} />
        ))}

    </section>
  )
}

export default Usuarios;