import style from './About.module.css'
const About = () => {
    return(
        <div className={style.contenedor}>
            <h2>Informacion</h2>
            <p className={style.info}>
                Hola!, me llamo Rodrigo y soy estudiante de Henry. <br/>
                este es mi proyecto integrador de la api Rick and Morty, estoy aprendiendo cosas nuevas cada dia. <br/>
                Desde ya mucho gusto y nos vemos! cualquier consulta, contactarme por mi redes.
            </p>
            <hr/>
            <h2>Sobre mi</h2>
            <p className={style.yo}>
                Nombre / Rodrigo Alejandro<br/>
                Apellido / Perez <br/>
                Edad / 21 <br/>
                Gmail / rodrigo.alejandro.perez.104@gmail.com <br/>
                Linkedin / <a href="http://www.linkedin.com/in/rodrigo-perez-9a914a270/" target= "_BLANK" className={style.link}>Click Aqui</a>
            </p>
        </div>
     )
};

export default About;