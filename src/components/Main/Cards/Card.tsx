import React, { useEffect, useState } from "react";
import { CardType, CartItems } from "../../../types/types";
import { Routes, Route, Link, useParams} from "react-router-dom";
import './card.css';
import loupe from '../../../assets/icons/blackloupe.svg';


const Card: React.FC<CardType> = (props) => {
    const path: string = '/Products/' + props.id.toString();
    const [inCart, setInCart] = useState<boolean>(false);
    const [numberInCart, setNumberInCart] = useState<number>(0);
    useEffect(() => {
        const cartLS = localStorage.getItem('cart');
        if (cartLS) {
            const cart: CartItems[] = JSON.parse(cartLS);
            const findItem = cart.find((item) => item.id === props.id.toString());
            if (findItem) {
                setInCart(true); 
                setNumberInCart(findItem.numbers);
            }
        }
    })
    
    return (
        <>
            <div className="card__photo">
                    <img className="card__photo_img" src={props.imgsrc} alt="card"/>
                    <Link to={path}>
                        <div className="loupe_container">
                            <img className="loupe_img" src={loupe}></img>
                        </div>
                    </Link>
            </div>
            <div className="card__description">
                <p className="card__description_name">{props.name}</p>
                <p className="card__description_price">${props.price}</p>               
                {inCart ? <p className="inCart">In cart: {numberInCart}</p> :
                
                <button className="add">
                    <Link to={path}>
                        <img className="add-img" src="../../../assets/icons/cart.png"/>
                    </Link> 
                </button>
                
                }
            </div>
        </>
    )
}

export default Card;