import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css"

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({})

const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData);
}

const handleChange = (event)=>{
    setUserData({ ...userData, [event.target.name] : event.target.value })

    setErrors(validation({
        ...userData, [event.target.name] : event.target.value
    }));
};

    return (
        <div className={style.contenedor}>
            <form className={style.color} onSubmit={handleSubmit}>
                <div className={style.contenedor3}>
                    <label  htmlFor="email">Email:</label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="Ingresar email"/>
                    {errors.email && <p>{errors.email}</p>}
                </div> <br/>
                <div className={style.contenedor2}>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" value={userData.password} onChange={handleChange} placeholder="Ingresar contraseña"/>
                    {errors.password && <p>{errors.password}</p>}
                </div> 
                    
                <button type="submit">Entrar</button>
            </form>
         </div>

    );
};

export default Form