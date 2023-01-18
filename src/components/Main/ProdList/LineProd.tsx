import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSort } from "../StateSlice";

const Line: React.FC = () => {
    const statecards = useAppSelector(state => state.cards.cardItem);
    const [sortSelect, setSortSelect] = useState<string>('Default')
    const dispatch = useAppDispatch();

    function sort(value: string) {
        //const eventValue = e.currentTarget.textContent as string;
        setSortSelect(value)
        dispatch(setSort(value));
        // console.log(value)
    }

    return (
        <div className="lineprod">
            <p>
                {statecards.length} products found
            </p>
            <hr/>
            <p>Sort by</p>
            <select className="sort_list" name="category" value={sortSelect} onChange={event => sort(event.target.value)}>
                <option id="0" >Price</option>
                <option id="1" >Default</option>
            </select>
            {/* <button onClick={(e) => sort(e)}>
                price
            </button>
            <button onClick={(e) => sort(e)}>
                default
            </button> */}
        </div>
    )
}

export default Line;