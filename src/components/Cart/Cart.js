import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
        <h4>selected Items : {cart.length}</h4>
        </div>
    );
};

export default Cart;