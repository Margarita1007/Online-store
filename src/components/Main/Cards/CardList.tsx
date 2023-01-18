import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { CardType } from "../../../types/types";
import { selectCardState } from "../StateSlice";
import Card from "./Card";


// export default function CardList1(cards: CardType[]) {

//     const cardElements = cards.map((card) =>
//             <div className="card"  key = {card.id}>
//                 {Card(card)}
//             </div>
//         )
//     return (
//         <>
//         {cardElements}
//         </>
//     )
// } 

const CardList: React.FC = () => {
    const stateCards = useAppSelector(state => state.cards.cardItem);
    const sort = useAppSelector(state => state.cards.sort);
    let cards = [...stateCards];
    if (sort === 'Price') {
        cards.sort((a, b) => a.price - b.price)
    } 
    
    console.log(cards);

    return (
        <>
        {cards.length ?
            cards.map((card) => (
            <div className="card"  key = {card.id}>
                <Card 
                    key={card.article}
                    {...card}
                />
            </div>
            ))
        : 
        <div className="notfound-cards">Not Found</div>
        }
        </>
    )    
}

export default CardList