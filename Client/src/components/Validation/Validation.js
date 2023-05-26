const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "El email que usted ingreso no es valido"
    } 
    if(userData.email.length === "") {
        errors.email = "Tiene que ingresar un email"
    } 
    if(userData.email.length >= 35){
        errors.email = "Su email no debe alcanzar los 35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre seis y diez caracteres"
    }
    return errors;
};

export default validation;


