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
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} alt="Instagram" width="454px" />
                            </div>
                            <div>
                                <div className="loginpage_rightcomponent">
                                    <img className="loginpage__logo" alt="Instagram" src={insta_logo} />
                                    <div className="loginPage__signin">
                                        {
                                            this.state.isLogin ? <SignIN/> : <SignUp/>
                                        }

                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">O</div>
                                            <div className="login__dividor"></div>
                                        </div>

                                        <div className="login__fb">
                                            <img src={fb} alt="Instagram" width="15px" style={{ "marginRight":"5px" }} />Iniciar Sesión Con Facebook.
                                        </div>
                                        <div className="login_forgt"> ¿Has Olvidado La Contraseña?</div>
                                    </div>
                                </div>
                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">¿No Tienes Una Cuenta? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Regístrate.</span></div> :
                                        <div className="loginPage__signup">¿Tener Una Cuenta? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Iniciar Sesión.</span></div>
                                    }
                                </div>
                                <div className="loginPage__downloadSection">
                                    <div>
                                        Descarga La Aplicación.
                                    </div>
                                    <div className="loginPage__option">
                                        <img className="loginPage_dwimg" alt="Instagram" src={appstore} width="136px" />
                                        <img className="loginPage_dwimg" alt="Instagram" src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        </>
        );
    }
}

export default LoginPage;