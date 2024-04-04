import { useEffect, useState } from "react";
import style from "./LastUser.module.css";

export default function LastUser(){
    const [lastUser, setLastUser] = useState(0);

    useEffect(()=> {
      
      fetch("http://localhost:3000/api/lastuser")
        .then((respuesta) => respuesta.json())
        .then((user) => setLastUser(user.lastUser))
        .catch (error => console.error(error));
    },[])

    let categoryName;
    if (lastUser && lastUser.usersCategories) {
        categoryName = lastUser.usersCategories.nombre;
    }

    return(
        <div className={style.container}>
            <h3 className={style.titleLastUser}><strong>Último usuario creado:</strong> {lastUser.nombre} {lastUser.apellido}</h3>
            <p className={style.description}><strong>Email:</strong> {lastUser.email}.</p>
            <p className={style.description}><strong>Categoría:</strong> {categoryName}</p>
            <p className={style.description}><strong>Dirección:</strong> {lastUser.direccion}</p>
            <p className={style.description}><strong>Teléfono:</strong> {lastUser.telefono}</p>
            <p className={style.description}><strong>Estado:</strong> { lastUser.activo === 1 ? 'Activo' : 'Inactivo'}</p>
            <img className={style.resizeImgUser} src={`http://localhost:3000/images/usuarios/${lastUser.imagen}`} alt=""/>
        </div>
    )
}