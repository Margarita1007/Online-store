import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { info_cards } from "../Cards/info-cards";
import Navigation from "../Navigation/Navigation";
import AddToCart from "./AddToCart";
import './product.css';

const Product: React.FC = () => {
    const { id } = useParams();
    if (id) {
        const prodID = Number(id);
        const props = info_cards.find((item) => item.id === prodID); 
        if (props) {
            return (
                <>
                <Navigation/>
                <div className="product_wrapper">
                    <div className="back">
                        <Link to='/Products'>
                            <button className="back_button">BACK TO PRODUCTS</button>
                        </Link>
                    </div>
                    <div className="product_content_wrapper">
                        <div className="product_img">
                            <img src={props.imgsrc} alt={props.article}/>
                        </div>
                        <div className="product__content">
                            <h1 className='product_name'>{props.name}</h1>
                            <h3 className="product_price"> ${props.price}</h3>
                            <p className="product_info"> <b>Theme:</b> {props.theme} </p> 
                            <p className="product_info"> <b>Number of modules:</b> {props.modules} </p>
                            <p className="product_info"> <b>Width: </b> {props.width} cm </p>
                            <p className="product_info"> <b>Height: </b> {props.height} cm </p>
                            <p className="product_info"> <b>Stock availability: </b> {props.stock}</p>
                            <hr/>
                            <AddToCart/>
                        </div>
                    </div>
                </div>

            </>
            )
        } else {
            return (
                <h3>Not found</h3>
            )
        }
    } else {
        return (
            <>Not found id = {id}</>
        )
    }
}

export default Product;