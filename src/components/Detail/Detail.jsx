import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css'
import { NavLink } from 'react-router-dom'; 


const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     return(
         <div className={style.contenedor}>
            <div className={style.letras}>
         <h2>Nombre / <p>{character.name && character.name}</p> </h2> 
         <h2>Estado / <p>{character.status && character.status}</p> </h2> 
         <h2>Genero / <p>{character.gender && character.gender}</p> </h2> 
         <h2>Origen / <p>{character.origin?.name && character.origin?.name}</p> </h2> 
         </div>

      <div className={style.imagen}>

        <img className={style.imagen1} src={character.image && character.image} alt="" /> 
      </div>

         <NavLink className={style.boton} to='/home' >
            Cerrar
         </NavLink>

    </div>



     ) 
};

export default Detail;