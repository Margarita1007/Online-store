import React from "react";
import MultiRangeSlider from "../../../app/multiRangeSlider/multiRangeSlider";
import Categories from "./Categories";

const Filters320: React.FC = () => {
    // function filterClose() {
    //     const filters = document.getElementById("filter320") as HTMLElement;
    //     filters.classList.add('displaynone');
    // }
    return (
        <div className="filters320_wrapper displaynone" id="filter320">
            <div className="filters320">
                <div className="filters320_price">
                    <h5>Price</h5>
                    <MultiRangeSlider/>
                </div>
                <div className="filters320_categories">
                    <h5>Categories</h5>
                    <Categories/>
                </div>
            </div>
            {/* <button onClick={filterClose}>close</button> */}
        </div>
    )
}

export default Filters320; 