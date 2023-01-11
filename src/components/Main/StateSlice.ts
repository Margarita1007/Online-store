import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { RootState } from "../../app/store";
import { CardType, CartItems, FilterType, IstateCards } from "../../types/types";
import { info_cards } from "./Cards/info-cards";
import { getStateLS } from "./state";

// interface stateCards {
//     cardItem: CardType[],
//     filters: {
//         cardsFilter: CardType[],
//         category: string,
//         search: string,
//     },
//     sort: string
// }

// const stateCards = () => {
//     const state = getStateLS();
//     return state.cardItem
// }

// const stateSearch = () => {
//     const search
// }

// const initialState: IstateCards = {
//     cardItem: stateCards(),
//     filters: {
//         cardsFilter: [],
//         category: 'All',
//         search: stateSearch(),
//     },
//     sort: "",
// }


function filtered(filters: FilterType) {
    let products = info_cards;
    if (filters.search) {
        if (filters.category !== 'All') {
            const filt = products.filter(item => item.theme == filters.category); //фильтр по категории
            return filt.filter(item => item.name.toLowerCase().includes(filters.search.toLowerCase())); //плюс поиск
        } else {
            return products.filter(item => item.name.toLowerCase().includes(filters.search.toLowerCase())); //все кат плюс поиск
        }
    } else {
        if (filters.category !== 'All') {
            return products.filter(item => item.theme == filters.category); 
        } else {
            return products
        }
    }
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState: getStateLS(),
    reducers: {
        // setCard: (state, action: PayloadAction<CardType[]>) => {  //search
        //     state.cardItem = action.payload;
        // },
        setSearchWord: (state, action: PayloadAction<string>) => {
            state.filters.search = action.payload;
            state.cardItem = filtered(state.filters);
            // state.cardItem = info_cards.filter(item => item.name.toLowerCase().includes(state.filters.search.toLowerCase()));
            localStorage.setItem('state', JSON.stringify(state));
            // console.log(filtered(''))
        },
        setCat: (state, action: PayloadAction<string>) => {
            state.filters.category = action.payload;
            // action.payload === 'All' ? state.cardItem = info_cards :
            state.cardItem = filtered(state.filters);
            // state.cardItem = info_cards.filter(item => item.theme === action.payload);
            localStorage.setItem('state', JSON.stringify(state))
        }
    }
})

export const { setSearchWord, setCat } = cardSlice.actions;

export const selectCardState = (state: RootState) => state.cards;

export default cardSlice.reducer;