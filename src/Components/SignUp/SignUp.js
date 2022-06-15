import React, { Component } from 'react';
import "./SignUp.css";

class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }

    render(){
        return (
        <>
            <div>
                <h2 className='titleSignup'>Regístrate Para Ver Fotos Y Vídeos De Tus Amigos.</h2>
                <input className="logipage__text" type="text" placeholder="Número De Móvil O Correo Electrónico." />
                <input className="logipage__text" type="text" placeholder="Nombre Completo." />
                <input className="logipage__text" type="text" placeholder="Nombre De Usuario." />
                <input className="logipage__text" type="password" placeholder="Contraseña." />
                <h6 className='textSubtitle'>Es Posible Que Los Usuarios De Nuestro Servicio Hayan Subido Tu Información De Contacto En Instagram. Más información.</h6>
                <h6 className='textSubtitle'>Al Registrarte, Aceptas Nuestras Condiciones, La Política De Datos Y La Política De Cookies.</h6>
                <button className="login__button">Regístrate.</button>
            </div>
        </>
        );
    }
}

export default SignUp;