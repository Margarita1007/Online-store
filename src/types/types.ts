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

export type CartItems = {
    id: string,
    numbers: number,
}

export type State = {
    cart: {
        id: string,
        numbers: number,
    }[],
    filters: {}
}