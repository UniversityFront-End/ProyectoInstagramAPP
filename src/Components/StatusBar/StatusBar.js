import React, { useEffect, useState} from 'react';
import "./StatusBar.css";
import States from './States/States';


function StatusBar() {
    let [statusList, setStatusList] = useState([])
    
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setStatusList(data.results))
        .catch((err) => console.info(err))

    }, [])

    statusList = statusList.filter(item => item.id !== 1)
    let trmXli1 = {
        transform: 'translateX(0px)',
        width: '10px'
    }
    let trmXli2 = {
        transform: 'translateX(' + (statusList.length * 80) + 'px)',
        width: '10px'
    }

    return (
        <div className="statusbar">
            <button className="statusbar__button button-right" onClick={MoveRight}></button>
            <button className="statusbar__button button-left button-none" onClick={MoveLeft}></button>
            <div className="statusbar__container">
                <div className="statusbar__container-view">
                    <ul className="statusbar__container__list">
                        <li style={trmXli1}></li>
                        <li style={trmXli2}></li>
                        {
                            
                            statusList.map((props, index)=>{
                                let trmX = new Object();
                                trmX.transform = "translateX(" + (-70 + ((index + 1) * 80)) + "px)";
                                return <States 
                                key={props.id} 
                                name={props.name.replace(/\s/g, '_')}
                                image={props.image}
                                trmX={trmX}
                                />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
    
}

function MoveRight() {
    let statusbarContainer = document.getElementsByClassName('statusbar__container')[0];
    let statusbarContainerView = document.getElementsByClassName('statusbar__container-view')[0];
    let buttonLeft = document.getElementsByClassName("button-left")[0];
    let buttonRight = document.getElementsByClassName("button-right")[0];

    let trm = statusbarContainerView.scrollWidth - (statusbarContainer.scrollLeft + statusbarContainer.offsetWidth)

    if (trm < 320) {
        statusbarContainerView.style.transform = 'translateX(-' + (trm) + 'px)';
    } else {
        statusbarContainerView.style.transform = 'translateX(-320px)';
    }
    statusbarContainerView.style.transition = 'transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s';
    
    setTimeout(() => {
        statusbarContainerView.style = '';
        statusbarContainer.scrollLeft += 320;
        buttonLeft.classList.remove('button-none');
        if (trm < 320) {
            buttonRight.classList.add('button-none');
        }
    }, 500);
}

function MoveLeft() {
    let statusbarContainer = document.getElementsByClassName('statusbar__container')[0];
    let statusbarContainerView = document.getElementsByClassName('statusbar__container-view')[0];
    let buttonLeft = document.getElementsByClassName("button-left")[0];
    let buttonRight = document.getElementsByClassName("button-right")[0];
    let trm = statusbarContainer.scrollLeft%320;
    
    if (trm > 0) {
        statusbarContainerView.style.transform = 'translateX(' + (trm) + 'px)';
    } else {
        statusbarContainerView.style.transform = 'translateX(320px)';
    }
    statusbarContainerView.style.transition = 'transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s';
    setTimeout(() => {
        statusbarContainerView.style = '';
        buttonRight.classList.remove('button-none');
        if (trm > 0) {
            statusbarContainer.scrollLeft -= trm;
        } else {
            statusbarContainer.scrollLeft -= 320;
        }

        if (statusbarContainer.scrollLeft === 0) {
            buttonLeft.classList.add('button-none');
        }
    }, 500);
}

export default StatusBar;