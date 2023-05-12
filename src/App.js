import './App.css'
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './App.css'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';


function App() {
   
   const [characters, setCharacters] = useState([])
   const location = useLocation();

   const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'rodrigo.perez@gmail.com';
const PASSWORD = '123rodrigo';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);
   

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };

   return (
         <div className={style.App}>
            {
               location.pathname !== '/' && <Nav onSearch={onSearch} /> 
            }
         
      <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      </div>
   );
}

export default App;
