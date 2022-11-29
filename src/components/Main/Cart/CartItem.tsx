import React from 'react';
import { CartItems } from '../../../types/types';
import { info_cards } from '../Cards/info-cards';
import deleteImg from '../../../assets/icons/delete.png';

const CartItem: React.FC<CartItems> = (props) => {

    function cartDelete(id: number) {
        const cartLS = localStorage.getItem('cart');
        if (cartLS) {
            let cart: CartItems[] = JSON.parse(cartLS);
            const index = cart.findIndex(elem => elem.id === id.toString());
            cart.splice(index, 1);
            cart.length ? localStorage.setItem('cart', JSON.stringify(cart))
            : localStorage.removeItem('cart');  
            location.reload();
            // const item = document.getElementById('item_' + id.toString()) as HTMLElement;
            // const inputCart = document.getElementById('cart-counter') as HTMLInputElement;
            // const inputValue = inputCart.value;
            // item.remove(); 
            // inputCart.value = (Number(inputValue) - 1).toString();
            //               totalPrice не обновляется
            
        }
    }

    const findCard = info_cards.find((item) => item.id.toString() === props.id);
    if (findCard) {
        const subtotal: number = findCard.price * props.numbers;
        return (
            <>
                <div className='cart_item_item'>
                    <div className="cart_item_img">
                        <img src={findCard.imgsrc} alt={findCard.article}/>
                    </div>
                    <div className='cart_item_name'>{findCard.name}</div>
                </div>
                <div className='cart_item_price'>${findCard.price}</div>
                <div className='cart_item_numbers'>{props.numbers}</div>
                <div className='cart_item_subtotal'>${subtotal}</div>
                <div className='cart_item_delete' onClick={() => cartDelete(findCard.id)}>
                {/* <div className='cart_item_delete' onClick={() => props.handleDelete(findCard.id)}> */}
                    <img src={deleteImg} alt='delete'/>
                </div>
            
            </>
        )
    } else return <div>Not found</div>
    
}

export default CartItem;