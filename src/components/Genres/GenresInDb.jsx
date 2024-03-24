import Genres from "./Genres";
import { useEffect, useState, useRef } from "react";
import style from "./GenresInDb.module.css";

function GenresInDb(){
const [generos, setGeneros] = useState([]);
const sectionBackRef = useRef();

const changeColour = () =>{
    /*sectionBackRef.current.classList.toggle("bg-warning");*/
    sectionBackRef.current.classList.toggle("bg-warning");
    sectionBackRef.current.classList.toggle("content");
}

useEffect(()=> {
    fetch("http://localhost:3030/genres")
        .then((respuesta) => respuesta.json())
        .then(genres =>setGeneros(genres))
  },[]
)

return(
    <>
    <section  ref={sectionBackRef} className="content">
        <h2 className="mt-3" onMouseOver={changeColour} onMouseOut={changeColour}>Géneros</h2>
        <div className={`list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded ${style.sizeTable}`}>
            <button type="button" className="list-group-item list-group-item-action active text-center"
                aria-current="true">
                Listado de géneros de las películas
            </button>
            {generos.map((genero) => <Genres genero={genero} key={genero.id}/>)}
        </div>
    </section>
    </>
    
)

}
/* class GenresInDb extends Component{
    render (){
        return(
            <>
            <section className="content">
            <h2 className="mt-3">Géneros</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <button type="button" className="list-group-item list-group-item-action active text-center"
                    aria-current="true">
                    Listado de géneros de las películas
                </button>
                {this.state.genresList.map((genero) => <Genres genero={genero} key={genero.id}/>)}
            </div>
            </section>
            </>
            
        )
    }
    constructor (){
        super();
        this.state ={
            genresList: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3030/genres")
        .then((respuesta) => respuesta.json())
        .then(genres =>this.setState({genresList: genres}))
    }
} */

export default GenresInDb;