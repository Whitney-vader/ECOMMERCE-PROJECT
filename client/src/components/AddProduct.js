import React, { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product added:', name, price, qty, description);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={qty} onChange={(event) => setQty(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
