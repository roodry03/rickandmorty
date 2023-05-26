import { useState } from 'react';
import style from "./SearcBar.module.css"


const SearchBar = ({onSearch}) => {
   const [id, setId] = useState("")
   
   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={style.contenedorSearch}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=> {onSearch(id)}}>AGREGAR</button>
      </div>
   );
}

export default SearchBar;
