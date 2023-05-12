//necesitamos renderizar: name, status, species, gender, origin, image 
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) => {
   
   const [isFav, setIsFav] = useState(false)
   
const handleFavorite = () => {
   if(isFav){
      setIsFav(false); 
      removeFav(id);  
   } else {
      setIsFav(true);
      addFav({id, name, species, gender, image});
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   
   return (
      <div className={style.contenedor}>
         <button className={style.x} onClick={()=> {onClose(id)}}>x</button> 
         <NavLink className={style.link} to={`/detail/${id}`}>
         <img src={image} alt=''/> 
         <h2>Nombre: {name} </h2> 
         <h2>Especie: {species} </h2> 
         <h2>Genero: {gender} </h2> 
         </NavLink>
         <button  className={style.corazon} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
