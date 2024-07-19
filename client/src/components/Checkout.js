import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login and Pay</button>
      </form>
    </div>
  );
};

export default Checkout;