import React, { useState } from "react";
import { CardType } from "../../../types/types";
import Card from "./Card";
import { info_cards } from "./info-cards";
import Popup from "../Popup";
import '../popup.css';

export default function CardList(info_cards: CardType[]) {

    const cardElements = info_cards.map((card) =>
            <div className="card"  key = {card.id}>
                {Card(card)}
            </div>
        )
    return (
        <>
        {cardElements}
        </>
    )
} 