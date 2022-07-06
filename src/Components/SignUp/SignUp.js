import React, { Component } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import fb from '../../images/facebook (1).png';

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
                <div className="signup__fb">
                    <button className="fb">
                        <img src={fb} alt="Instagram" className='imgFB' />
                        <span>Iniciar Sesión Con Facebook.</span>
                    </button>
                </div>
                <div className="signup__ordiv">
                    <div className="signup__dividor"></div>
                    <div className="signup__or">O</div>
                    <div className="signup__dividor"></div>
                </div>
                <input className="signup__text" type="text" placeholder="Número De Móvil O Correo Electrónico." />
                <input className="signup__text" type="text" placeholder="Nombre Completo." />
                <input className="signup__text" type="text" placeholder="Nombre De Usuario." />
                <input className="signup__text" type="password" placeholder="Contraseña." />
                <p className='textSubtitle'>
                    Es Posible Que Los Usuarios De Nuestro Servicio Hayan Subido Tu Información De Contacto En Instagram. <b><Link to="#">Más Información</Link></b>.
                </p>
                <p className='textSubtitle'>
                    Al Registrarte, Aceptas Nuestras <b><Link to="#">Condiciones</Link></b>, La <b><Link to="#">Política De Datos</Link></b> Y La <b><Link to="#">Política De Cookies</Link></b>.
                </p>
                <button className="signup_button" type="submit" disabled>Regístrate.</button>
            </div>
        </>
        );
    }
}

export default SignUp;