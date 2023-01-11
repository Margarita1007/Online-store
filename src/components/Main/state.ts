import { CartItems, IstateCards, StateType } from "../../types/types";
import { info_cards } from "./Cards/info-cards";

export function getStateLS() {
// const cartLS = localStorage.getItem('cart');
// let cart: CartItems[] = [];
// if (cartLS) {
//     cart = JSON.parse(cartLS);
// }
    const initialState: IstateCards = {
        cardItem: info_cards,
        filters: {
            cardsFilter: [],
            category: 'All',
            search: ""
        },
        sort: ""
    }
    const stateLS = localStorage.getItem('state');
    if (stateLS) {
        const state: IstateCards = JSON.parse(stateLS);
        return state
    } else return initialState
}

// const stateLS: IstateCards  = {
     
// }
// // 
// export default stateLS;

// interface stateCards {
//     cardItem: CardType[],
//     filters: {
//         cardsFilter: CardType[],
//         category: string,
//         search: string,
//     },
//     sort: string
// }

export default getStateLS;