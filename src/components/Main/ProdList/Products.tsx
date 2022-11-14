import React from 'react';
import CardList from '../Cards/CardList';
import { info_cards } from '../Cards/info-cards';
import Filters from '../Filters/Filters';
import Navigation from '../Navigation/Navigation';
import './Main.css';


const Products: React.FC = () => {
    return (
        <>
            <Navigation />
            <div className="wrapper-main">
                <Filters/>
                <div className="main-cards">
                    {CardList(info_cards)}
                </div>
            </div>
        </>
    )
}

export default Products;