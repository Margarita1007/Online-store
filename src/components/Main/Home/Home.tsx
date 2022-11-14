import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home: React.FC = () => {
    return (
        <div className="home_wrapper"> 
            <div className="home_text_block">
                <h1>Design Your <br/> Comfort Zone</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto, at sed omnis corporis doloremque possimus velit! 
                    Repudiandae nisi odit, aperiam odio ducimus, 
                    obcaecati libero et quia tempora excepturi quis alias
                </p>
                <Link to='/products'>
                    <button className="home_button">SHOP NOW</button>
                </Link>
            </div>
            <div className="home_img">
                <img src='../../../assets/img/card12.jpg'></img>
            </div>
        </div>
    )
}

export default Home;