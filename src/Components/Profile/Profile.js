import React, { Component } from "react";
import "./Profile.css";
import insta_log from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import heart from "../../images/love.svg";
import Avatar from '@material-ui/core/Avatar';
import pp from "../../images/pp1.png";
import imageSrc from "../../images/pp1.png";
import { Icon } from "@material-ui/core";
import info from "../../images/option.png";
import seguir from "../../images/seguir.png";
import sugeridos from "../../images/sugeridos.png";
import picture_1 from "../../images/img1.png";
import picture_2 from "../../images/img2.png";
import picture_3 from "../../images/img3.png";
import picture_4 from "../../images/img4.png";
import gallery from "../../images/gallery.png";
import videos from "../../images/videos.png";
import person from "../../images/person.png";
import landscape1 from "../../images/landscape1.png";
import landscape2 from "../../images/landscape2.png";
import landscape3 from "../../images/landscape3.png";
import landscape4 from "../../images/landscape4.png";
import landscape5 from "../../images/landscape5.png";
import landscape6 from "../../images/landscape6.png";
import landscape7 from "../../images/landscape7.png";
import landscape8 from "../../images/landscape8.png";
import landscape9 from "../../images/landscape9.png";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <>
                <div className="profile_container">
                    <section className="profile_container_header">

                        <article className="profile_container_header_logo">
                            <img className="navbar_logo" alt='Logo Instagram' src={insta_log} width="105px" />
                        </article>

                        <article className="profile_container_header_icons">
                            <img className="navbar__img" alt='Home Instagram' src={home} width="25px" height="25px"/>
                            <img className="navbar__img" alt='Messenger Instagram' src={message} width="25px" height="25px"/>
                            <img className="navbar__img" alt='Find Instagram' src={find} width="25px" height="25px"/>
                            <img className="navbar__img" alt='Followers Instagram' src={heart} width="25px" height="25px"/>
                            <Avatar src={pp} className="navbar__img" style={{"maxWidth":"25px","maxHeight":"25px"}} />
                        </article>
                    </section>

                    <section className="profile_container_information">
                        <article className="profile_container_information_person">
                            <Avatar src={imageSrc} className="info__image" alt="Profile Picture" />
                        </article>

                        <article className="profile_container_information_name">
                            <h2>paisajes_.increibles</h2>
                            <img className="info__img" alt='Info Instagram' src={info} width="25px" height="25px"/>
                        </article>

                        
                    </section>

                    <section className="profile_container_buttons">

                        <article className="profile_container_buttons_icons">
                            <img className="seguir__img" alt='Button Follow' src={seguir} />
                            <img className="sugeridos__img" alt='Button Suggested' src={sugeridos} />
                        </article>

                    </section>

                    <section className="profile_container_description">
                        <p>🌍Paisajes 🌎Viajes 🌏Naturaleza
                            <br/>
                            🌄 Disfruta de los mejores paisajes del mundo
                            <br/>
                            Y siguenos para mas contenido 🌄
                            <br/>
                            🔜 200k
                        </p>
                    </section>

                    <section className="profile_container_featured">
                        <article className="profile_container_featured_pictures">
                            <img className="image_1" alt='Featured Story 1' src={picture_1} width="55px" height="55px" />
                            <img className="image_1" alt='Featured Story 2' src={picture_2} width="55px" height="55px" />
                            <img className="image_1" alt='Featured Story 3' src={picture_3} width="55px" height="55px" />
                            <img className="image_1" alt='Featured Story 4' src={picture_4} width="55px" height="55px" />
                            
                        </article>

                            <div className="profile_container_featured_text">
                                <h5>Destacada</h5>
                                <h5>Destacada</h5>
                                <h5>Destacada</h5>
                                <h5>Destacada</h5>
                            </div>
                    </section>

                    <section className="profile_container_indicators">
                        <article className="profile_container_indicators_data">
                            <div>
                                <h4><strong>306</strong></h4>
                                <h5>Publicaciones</h5>
                            </div>
                            <div>
                                <h4><strong>118K</strong></h4>
                                <h5>Seguidores</h5>
                            </div>
                            <div>
                                <h4><strong>111</strong></h4>
                                <h5>Seguidos</h5>
                            </div>
                        </article>
                    </section>

                    <section className="profile_container_icons">
                        <article className="profile_container_icons_render">
                            <img className="gallery__img" alt='Button Gallery' src={gallery} />
                            <img className="videos__img" alt='Button Videos' src={videos} />
                            <img className="person__img" alt='Button Labels' src={person} />
                        </article>
                    </section>

                    <section className="profile_container_pictures">
                        <article className="profile_container_pictures_gallery">
                            <img className="landscape_1" alt='Picture 1' src={landscape1} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 2' src={landscape2} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 3' src={landscape3} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 4' src={landscape4} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 5' src={landscape5} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 6' src={landscape6} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 7' src={landscape7} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 8' src={landscape8} width="105px" height="105px" />
                            <img className="landscape_1" alt='Picture 9' src={landscape9} width="105px" height="105px" />
                        </article>
                    </section>

                    <section className="profile_container_footer">
                        <article>
                            <h5>Meta Información Blog Empleo Ayuda API</h5>
                            <h5>Privacidad Condiciones Cuentas destacadas Hashtags</h5>
                            <h5>Ubicaciones Instagram Lite</h5>
                            <h5>Subir contactos y personas no usuarias</h5>
                            <h5>Español (España) © 2022 Instagram from Meta</h5>
                        </article>
                    </section>
                </div>


            </>
        );
    }
}

export default Profile;