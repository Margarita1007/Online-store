import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { CardType } from '../../../types/types';
import Card from '../Cards/Card';
import CardList from '../Cards/CardList';
import { info_cards } from '../Cards/info-cards';
import Filters from '../Filters/Filters';
import Navigation from '../Navigation/Navigation';
import Line from './LineProd';
import './Main.css';


const Products: React.FC = () => {
//    const cards = useAppSelector(state => state.cards.cardItem);
// //    console.log(cards)
   
    return (
        <>
            <Navigation />
            <div className="wrapper-main">
                <Filters />
                <section className='wrapper-cards'>
                    <Line/>
                    <div className="main-cards">
                        <CardList/>
                    </div>

                </section>
                
            </div>
        </>
    )
}

export default Products;