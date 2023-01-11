import React from "react";
import { useAppSelector } from "../../../app/hooks";

const Line: React.FC = () => {
    const statecards = useAppSelector(state => state.cards.cardItem)
    return (
        <div className="lineprod">
            <p>
                {statecards.length} products found
            </p>
            <hr/>
            <p>Sort by</p>
        </div>
    )
}

export default Line;