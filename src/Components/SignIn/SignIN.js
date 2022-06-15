import React, { Component } from 'react';
import "../LoginPage/LoginPage.css"

class SignIN extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }

    render(){
        return (
        <>
            <div>
                <input className="logipage__text" type="text" placeholder='Teléfono, Usuario O Correo Electrónico.' />
                <input className="logipage__text" type="password" placeholder='Contraseña.' />
                <button className="login__button">Iniciar Sesión.</button>
            </div>
        </>
        );
    }
}

export default SignIN;