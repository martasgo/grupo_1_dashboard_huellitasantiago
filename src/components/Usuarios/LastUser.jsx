import { useEffect, useState } from "react";
import style from "./LastUser.module.css";

export default function LastUser(){
    const [lastUser, setLastUser] = useState(0);

    useEffect(()=> {
      
      fetch("http://localhost:3000/api/lastuser")
        .then((respuesta) => respuesta.json())
        .then((user) => setLastUser(user))
        .catch (error => console.error(error));
    },[])

    let categoryName;
    if (lastUser && lastUser.usersCategories) {
        categoryName = lastUser.usersCategories.nombre;
    }

    return(
        <div className={style.container}>
            <h3 className={style.titleLastUser}><strong>Último usuario creado:</strong></h3>
            <p className={style.nameLastUser}>{lastUser.nombre} {lastUser.apellido}</p>
            <p className={style.description}><strong>Email:</strong> {lastUser.email}.</p>
            <p className={style.description}><strong>Categoría:</strong> {categoryName}</p>
            <img className={style.resizeImgUser} src={`http://localhost:3000/images/usuarios/${lastUser.imagen}`} alt=""/>
        </div>
    )
}