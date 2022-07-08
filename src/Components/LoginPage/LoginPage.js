import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from '../SignIn/SignIN';
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else    
            this.setState({isLogin: true});
    }

    render() { 
        return ( 
        <>
            <div>
                <Grid container>
                    <Grid className="A1" item xs={3}>
                    </Grid>
                    <Grid className="A2" item xs={6}>
                        <div className="loginpage__main">
                            <div className="responsiveSlide">
                                <img src={inst_image} alt="Instagram" width="454px" />
                            </div>
                            <div>
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage__logo" alt="Instagram" src={insta_logo} />
                                    <div className="loginPage__signin" id="signin-form">
                                        {
                                            this.state.isLogin ? <SignIN/> : <SignUp/>
                                        }

                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">O</div>
                                            <div className="login__dividor"></div>
                                        </div>

                                        <div className="login__fb">
                                            <button className="button__fb">
                                                <img src={fb} alt="Instagram" className='imgFB' />
                                                <span>Iniciar Sesión Con Facebook.</span>
                                            </button>
                                        </div>
                                        <Link to="#" className="login_forgt"> ¿Has Olvidado La Contraseña?</Link>
                                    </div>
                                </div>
                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <p className="loginPage__signin">¿No Tienes Una Cuenta? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}><Link to="#">Regístrate.</Link></span></p> :
                                        <p className="loginPage__signup">¿Tienes Una Cuenta? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}><Link to="#">Entrar.</Link></span></p>
                                    }
                                </div>
                                <div className="loginPage__downloadSection">
                                    <p className='DescargaAPP'>
                                        Descarga La Aplicación.
                                    </p>
                                    <div className="loginPage__option">
                                        <Link to="#">
                                            <img className="loginPage_dwimg" alt="Instagram" src={appstore} width="136px" />
                                        </Link>
                                        <Link to="#">
                                            <img className="loginPage_dwimg" alt="Instagram" src={playstore} width="136px" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="A3" item xs={3}>
                    </Grid>
                </Grid>
            </div>
        </>
        );
    }
}

export default LoginPage;