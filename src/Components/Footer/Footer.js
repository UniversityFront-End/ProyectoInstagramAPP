import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div className="footer">
                CopyRight &copy; 2022
                &#9474; Todos Los Derechos Reservados.
                &#9474; Distribuido Por: <strong><span><b>Instagram App&reg;.</b></span></strong>
            </div>
        );
    }
}

export default Footer;