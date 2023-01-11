import React, { useEffect, useState } from 'react';
import { CartItems } from '../../../types/types';
import { info_cards } from '../Cards/info-cards';
import deleteImg from '../../../assets/icons/delete.png';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { removeToCart, setCart } from './cartSlice';
import { store } from '../../../app/store';


const CartItem: React.FC<CartItems> = (props) => {
    
    const cart = useAppSelector(state => state.cart).cartItem;
    const [numb, setNumb] = useState<number>(props.numbers);
    const [currentCart, setCurrentCart] = useState<CartItems[]>(cart);
    const dispatch = useAppDispatch();
    
    
    useEffect(() => {
        updateLS();
    }, [numb]);

    function updateLS() {
        const cartLS = localStorage.getItem('cart');
        if (cartLS) {
            const cart: CartItems[] = JSON.parse(cartLS);
            const newCart = cart.map((item) => {
                if (item.id === props.id) {
                    item.numbers = numb;
                }
                return item;
            })
           
            localStorage.setItem('cart', JSON.stringify(newCart));
            dispatch(setCart(newCart));
        }
    }
    
    const minus = () => {
        if (numb > 1) {
            setNumb(numb - 1);
        }
    }

    const plus = () => {
        setNumb(numb + 1);
    }

    const cartDelete = (idDel: string) => {
        dispatch(removeToCart(idDel));
        // let newCart = currentCart.concat([]);
        // const index = newCart.findIndex(elem => elem.id === idDel);
        // newCart.splice(index, 1);
        // if (newCart.length) {
        //     localStorage.setItem('cart', JSON.stringify(newCart));
        //     dispatch(setCart(newCart));
        //     // console.log(newCart)
        //     //location.reload();
        // } else {
        //     localStorage.removeItem('cart');
        //     dispatch(setCart([]));
        // } 
        // const cartLS = localStorage.getItem('cart');
        
        // if (cartLS) {
        //     let cart: CartItems[] = JSON.parse(cartLS);
        //     const index = cart.findIndex(elem => elem.id === idDel.toString());
        //     cart.splice(index, 1);
        //     // cart.length ? localStorage.setItem('cart', JSON.stringify(cart))
        //     // : localStorage.removeItem('cart');  
        //     if (cart.length) {
        //         localStorage.setItem('cart', JSON.stringify(cart));
        //         dispatch(setCart(cart));
        //     } else {
        //         localStorage.removeItem('cart');
        //         dispatch(setCart([]));
        //     }
        //     // location.reload();
        //     // const item = document.getElementById('item_' + idDel.toString()) as HTMLElement;
        //     // const inputCart = document.getElementById('cart-counter') as HTMLInputElement;
        //     // const inputValue = inputCart.value;
        //     // item.remove(); 
        //     // inputCart.value = (Number(inputValue) - 1).toString();
        //     //               totalPrice не обновляется
            
        // }
        return;
    }



    const findCard = info_cards.find((item) => item.id.toString() === props.id);
    if (findCard) {
        const subtotal: number = findCard.price * numb;
        return (
            <>
                <div className='cart_item_item'>
                    <div className="cart_item_img">
                        <img src={findCard.imgsrc} alt={findCard.article}/>
                    </div>
                    <div className='cart_item_name'>{findCard.name}</div>
                </div>
                <div className='cart_item_price'>${findCard.price}</div>
                
                <div className='cart_item_numbers'>    
                    <div className="amount_buttons_container_cart">
                        <button className="amount_button_cart" onClick={minus}>-</button>
                            {numb}
                        <button className="amount_button_cart" onClick={plus}>+</button>
                    </div>
                </div>

                <div className='cart_item_subtotal'>${(subtotal).toFixed(2)}</div>
                <div className='cart_item_delete' onClick={() => cartDelete(props.id)}>
                {/* <div className='cart_item_delete' onClick={() => props.handleDelete(findCard.id)}> */}
                    <img src={deleteImg} alt='delete'/>
                </div>
            
            </>
        )
    } else return <div>Not found</div>
    
}

export default CartItem;