export type CardType = {
    id: number,
    article: string,
    name: string,
    theme: string,
    modules: number,
    width: number,
    height: number,
    imgsrc: string,
    price: number,
    stock: number
}

export type FilterType = {
    cardsFilter: CardType[],
    category: string,
    search: string,
}

export type CartItems = {
    id: string,
    numbers: number,
}

export type StateType = {
    cart: {
        id: string,
        numbers: number,
    }[],
    filters: {}
}

export interface IstateCards {
    cardItem: CardType[],
    filters: {
        cardsFilter: CardType[],
        category: string,
        search: string,
    },
    sort: string
}

