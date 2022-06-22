import React from 'react'

import "./States.css"

function States(props) {
    return (
        <li className="statusbar__container__list__item" style={props.trmX}>
            <div className="item_status">
                <button>
                    <div className="statusbar__container__list__item__image">
                        <span className="image_border"></span>
                        <span className="image">
                            <img src={props.image} alt={"Foto del perfil de " + props.name} />
                        </span>
                    </div>
                    <p className="statusbar__container__list__item__username">{props.name}</p>
                </button>
            </div>
        </li>
    );
}


export default States;