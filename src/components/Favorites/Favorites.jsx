import Card from "../Card/Card";
import { connect, useDispatch} from "react-redux";
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) =>{

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    };  

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    };

    return (

        <div className={style.contenedor}>
          <div className={style.contenedor}>
            <select className={style.select1} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
    
            <select className={style.select2} onChange={handleFilter}>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="Genderless">Sin Genero</option>
                <option value="unknown">desconocido</option>
            </select> 
            </div>
            <br/>




            { 
            
            myFavorites?.map(
        ({ id, name, status, species, gender, origin, image, onClose }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites
    }
 }

export default connect(mapStateToProps, null)(Favorites);