import React from "react";
import { CardType } from "../../../types/types";
import Categories from "./Categories";
import './filters.css';
import SearchBar from "./Search";

const Filters: React.FC = () => {
    return (
        <div className="main-filters">

            <SearchBar />
            
            <div className="form-filter range-price-filter">
                <legend className="legend legend_price">Price</legend>
                <div className="range_price">

                </div>
            </div>

            {/* <fieldset className="theme-filter">
                <legend>Theme</legend>
                <div>
                    <input type="checkbox" id="nature" name="theme"/>
                    <label htmlFor="nature">Nature</label><br/>
                </div>

                <div>
                    <input type="checkbox" id="animals" name="theme"/>
                    <label htmlFor="animals">Animals</label><br/>
                </div>
                
                <div>
                    <input type="checkbox" id="minimalism" name="theme"/>
                    <label htmlFor="minimalism">Minimalism</label>
                </div>

                <div>
                    <input type="checkbox" id="travel" name="theme"/>
                    <label htmlFor="travel">Travel</label>
                </div>
            </fieldset> */}
            
            <div className="form-filter category-filter">
                <h5>Category</h5>
                <Categories />
            </div>

            <fieldset className="width-filter">
                <legend>Width</legend>
                <div>
                    <input type="checkbox" id="60-width" name="width"/>
                    <label htmlFor="60-width">60 cm</label><br/>
                </div>   
                <div>
                    <input type="checkbox" id="120-width" name="width"/>
                    <label htmlFor="120-cm">120 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="150-width" name="width"/>
                    <label htmlFor="150-cm">150 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="180-width" name="width"/>
                    <label htmlFor="180-width">180 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="210-width" name="width"/>
                    <label htmlFor="210-width">210 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="240-width" name="width"/>
                    <label htmlFor="240-width">240 cm</label><br/>
                </div>
            </fieldset>

            <fieldset className="height-filter">
                <legend>height</legend>
                <div>
                    <input type="checkbox" id="60-height" name="height"/>
                    <label htmlFor="60-height">60 cm</label><br/>
                </div>  
                <div>
                    <input type="checkbox" id="90-height" name="height"/>
                    <label htmlFor="90-cm">90 cm</label><br/>
                </div> 
                <div>
                    <input type="checkbox" id="100-height" name="height"/>
                    <label htmlFor="100-cm">100 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="120-height" name="height"/>
                    <label htmlFor="120-cm">120 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="140-height" name="height"/>
                    <label htmlFor="140-cm">140 cm</label><br/>
                </div>
                <div>
                    <input type="checkbox" id="150-height" name="height"/>
                    <label htmlFor="150-cm">150 cm</label><br/>
                </div>
            </fieldset>

            
            <fieldset className="modules-filter">
                <legend>Number of modules</legend>

                <div>
                    <input type="checkbox" id="1-modules" name="modules"/>
                    <label htmlFor="1-modules">1 module</label><br/>
                </div>

                <div>
                    <input type="checkbox" id="2-modules" name="modules"/>
                    <label htmlFor="2-modules">2 modules</label><br/>
                </div>

                <div>
                    <input type="checkbox" id="3-modules" name="modules"/>
                    <label htmlFor="3-modules">3 modules</label><br/>
                </div>

                <div>
                    <input type="checkbox" id="5-modules" name="modules"/>
                    <label htmlFor="5-modules">5 modules</label><br/>
                </div>
            </fieldset>  
            <div className="div_clear_all hidden">
                <button className="clear_all">Clear LS</button>
            </div>
            <div className="div_clear_filters">
                <button className="clear_filters">Clear filters</button>
            </div>
            <div className="div_clear_cart">
                <button className="clear_cart">Clear cart</button>
            </div>

        </div>
    )
}

export default Filters;