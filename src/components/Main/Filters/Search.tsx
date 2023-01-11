import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CardType, IstateCards } from "../../../types/types";
import { info_cards } from "../Cards/info-cards";
import { setSearchWord } from "../StateSlice";

const SearchBar: React.FC = () => {
    const stateCards = useAppSelector(state => state.cards.cardItem);
    const dispatch = useAppDispatch();
    
    function search(word: string) {
        
        dispatch(setSearchWord(word));
    }
    
    function getSearchWord() {
        const stateLS = localStorage.getItem('state');
        if (stateLS) {
            const state: IstateCards = JSON.parse(stateLS);
            return state.filters.search
        } else {
            return ""
        }
    }

    return (
        <div className="form-filter search-filter">
                <div className="search-wrapper">    
                        <form className="search-form">
                            <input 
                                type="search" 
                                id="search-field" 
                                placeholder="Search..." 
                                autoComplete="off" 
                                autoFocus
                                onChange={(e) => search(e.target.value)}
                                value={getSearchWord()}
                            />
                            {/* <input type="submit" id="search-submit" value="Search"/> */}
                        </form>
                </div>
            </div>
    )
}
export default SearchBar;