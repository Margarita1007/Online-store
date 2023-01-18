import { CartItems, IstateCards, StateType } from "../../types/types";
import { info_cards } from "./Cards/info-cards";

export function getStateLS() {
// const cartLS = localStorage.getItem('cart');
// let cart: CartItems[] = [];
// if (cartLS) {
//     cart = JSON.parse(cartLS);
// }

    let sortCardsPrice = [...info_cards]
    sortCardsPrice.sort((a, b) => a.price - b.price);
    let minPrice = sortCardsPrice[0].price;
    let maxPrice = sortCardsPrice[sortCardsPrice.length - 1].price;
    if (Number.isInteger(minPrice)) minPrice = Math.floor(sortCardsPrice[0].price);  
    if (Number.isInteger(maxPrice)) maxPrice = Math.ceil(sortCardsPrice[sortCardsPrice.length - 1].price);
    // const minPrice = Math.floor(sortCardsPrice[0].price);
    // const maxPrice = Math.ceil(sortCardsPrice[sortCardsPrice.length - 1].price);

    const initialState: IstateCards = {
        cardItem: info_cards,
        filters: {
            cardsFilter: [],
            category: 'All',
            search: "",
            price: {
                min: minPrice,
                max: maxPrice
            }
        },
        sort: ""
    }
    const stateLS = localStorage.getItem('state');
    if (stateLS) {
        const state: IstateCards = JSON.parse(stateLS);
        return state
    } else return initialState
}


export default getStateLS;