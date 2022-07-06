import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
        <>
            <div className="footer">
                <div className="links">
                    <Link to="#">Acerca De.</Link>
                    <Link to="#">   </Link>
                    <Link to="#">Trabajos.</Link>
                    <Link to="#">Ayuda.</Link>
                    <Link to="#">API.</Link>
                    <Link to="#">Privacidad.</Link>
                    <Link to="#">Términos.</Link>
                    <Link to="#">Cuentas Principales.</Link>
                    <Link to="#">Etiquetas.</Link>
                    <Link to="#">Ubicaciones.</Link>
                </div>
                <div className="copyright">
                    CopyRight &copy; {new Date().getFullYear()}
                    &#9474; Todos Los Derechos Reservados.
                    &#9474; Distribuido Por: <strong><span><b>Instagram App&reg;.</b></span></strong>
                </div>
            </div>
        </>
        );
    }
}

export default Footer;