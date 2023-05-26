import SearchBar from "../SearchBar/SearchBar"
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom"

const Nav = ({onSearch})=>{
    return (
        
        <div className={style.nav}>
                <NavLink to="/about" className={style.link}><p>About</p></NavLink> 
                <hr/>
                <NavLink to="/home" className={style.link1}><p>HOME</p></NavLink>
                <hr/>
                <NavLink to="/favorites" className={style.link2}><p>FAVORITOS</p></NavLink>
                <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;