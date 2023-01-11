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
    const cards = useAppSelector(selectCardState).cardItem;
    console.log(cards);
    // try {
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
    // }
    // catch(err) {
    //    return (
    //     <div>
    //         ошибка
    //     </div>
    //    )
    // }
    
}

export default CardList