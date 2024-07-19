import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/user/cart')
      .then((res) => res.json())
      .then((data) => {
        setCart(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const addToCart = (item) => {
    fetch('/user/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data)
      })
      .catch((err) => console.log(err))
  }

  const placeOrder = () => {
    fetch('/user/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cart })
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)
        setCart([])
      })
      .catch((err) => console.log(err))
  }

  const checkout = () => {
    // implement checkout logic here
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={placeOrder}>Place Order</button>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.date} - {order.total}</li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  )
}

export default User