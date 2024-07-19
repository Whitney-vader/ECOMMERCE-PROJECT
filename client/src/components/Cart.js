import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // const addItemToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} x {item.qty}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => console.log('Place order')}>Place Order</button>
    </div>
  );
};

export default Cart;