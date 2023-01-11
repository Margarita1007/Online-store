import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCat } from "../StateSlice";
import { categories } from "./constants";


const Categories: React.FC = () => {
    const stateCat = useAppSelector(state => state.cards.filters.category);
    const dispatch = useAppDispatch();

    function updateCat(e: React.MouseEvent<HTMLButtonElement>) {
        const eventValue = e.currentTarget.textContent as string;
        dispatch(setCat(eventValue));
    }
    return (
        <div className="category-list">
            {
                categories.map((cat, index) => (
                    <button
                        key = {index}
                        type = "button"
                        name = "category"
                        className={stateCat === cat ? 'active' : 'inactive'}
                        onClick = {(e) => updateCat(e)}
                        >
                            {cat}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories;