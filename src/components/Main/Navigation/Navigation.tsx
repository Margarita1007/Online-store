import React from "react";
import { useLocation, useParams } from "react-router-dom";
import './navig.css';
import { info_cards } from "../Cards/info-cards";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
    const location = useLocation();
    const path = location.pathname.replace(/[0-9]/g, '');
    const id = useParams();
    const prodID = Number(id.id);
    const product = info_cards.find((item) => item.id == prodID); 
    // console.log(product, path, id, prodID);
    if (product) {
        return (
            <div className="header-title"> 
                    <h3> 
                        <Link to='/'>Home</Link> 
                        <Link to={path}>{path}</Link>
                        {product.name}
                    </h3>
            </div>
        )
    } else {
        return (
            <div className="header-title"> 
                <h3>
                    <Link to='/'>Home</Link> 
                    <Link to={path}>{path}</Link>
                </h3>
            </div>
        )
    }
    
    
}

export default Navigation;