import React from 'react';

export default function Basket(props) {
    const {cartItems} = props;
    return (<aside className="block col-1">
        <h2>Cart Items</h2>
<div>{cartItems === 0 && <div>Cart To Empty</div>}</div>
    </aside>
    ); 
 }