import React from "react";
import { CardType } from "../../types/types";

const Popup: React.FC<CardType> = (props) => {
    return (
        <div className="modal-overlay">
            <div className="modal-window">
                <div className="modal-body">
                    <button className="modal-close">
                    &times;
                    </button>  
            
                    <img className="modal__img" src={props.imgsrc} alt={props.article}/>
                    <div className="modal__content" id='picture'>
                        <h1 className='modal__content_name'>{props.name}</h1>
                        <h3> Price: ${props.price}</h3>
                        <h5> <b>Theme:</b> {props.theme} </h5> 
                        <h5> <b>Number of modules:</b> {props.modules} </h5>
                        <h5> <b>Width: </b> {props.width} cm </h5>
                        <h5> <b>Height: </b> {props.height} cm </h5>
                        <h5> <b>Stock availability: </b> {props.stock}</h5>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Popup;