import React, { Component } from 'react';
import "./NavBar.css";
import insta_log from "../../images/logoinsta.png"
import lupe from "../../images/lupe.svg"
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import addPlus from "../../images/addPlus.svg";
import find from "../../images/find.svg";
import love from "../../images/love.svg";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="navbar">
                <div className="navbar__barContent">
                    <div className="navbar__barContent__left">
                        <a href="/">
                            <img src={insta_log} alt="Instagram" className="navbar__barContent__left__logo" />
                        </a>
                    </div>
                    <div className="navbar__barContent__center">
                        <input type="text" placeholder="Busca" className="navbar__barContent__center__search" />
                        <img src={lupe} alt="lupe" className="navbar__barContent__center__lupe" />
                        <div className="navbar__barContent__center__x"><span></span></div>
                        <div className="navbar__barContent__center__modal">
                            <div className="navbar__barContent__center__modal__header">
                                <h4>Recientes</h4>
                            </div>
                            <div className="navbar__barContent__center__modal__main">
                                <p>No hay búsquedas recientes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__barContent__right">
                        <div className="navbar__barContent__right__icons">
                            <a href="/">
                                <img src={home} alt="Home" className="navbar__barContent__right__icons__img" />
                            </a>
                        </div>
                        <div className="navbar__barContent__right__icons">
                            <a href="/direct/inbox/">
                                <img src={message} alt="Messenger" className="navbar__barContent__right__icons__img" />
                            </a>
                        </div>
                        <div className="navbar__barContent__right__icons">
                            <button>
                                <img src={addPlus} alt="Nueva publicación" className="navbar__barContent__right__icons__img" />
                            </button>
                        </div>
                        <div className="navbar__barContent__right__icons">
                            <a href="/explore/">
                                <img src={find} alt="Buscar personas" className="navbar__barContent__right__icons__img" />
                            </a>
                        </div>
                        <div className="navbar__barContent__right__icons">
                            <a href="/accounts/activity/">
                                <img src={love} alt="Sección de actividad" className="navbar__barContent__right__icons__img" />
                            </a>
                        </div>
                        <div className="navbar__barContent__right__icons">
                            <span>
                                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Foto del perfil de Rick_Sanchez" className="navbar__barContent__right__icons__img" />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;