import React from 'react';

const CountCart: React.FC<number> = (props) => {

    const minus = () => {
        
    }
    const plus = () => {

    }
    return (
        
        <div className='cart_item_numbers'>    
            <div className="amount_buttons_container_cart">
                <button className="amount_button_cart" onClick={minus}>-</button>
                    {props}
                <button className="amount_button_cart" onClick={plus}>+</button>
            </div>
        </div>
        
    )
}

export default CountCart;