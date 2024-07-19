import React from 'react';
import ProductReview from './ProductReview';

const Product = ({ product }) => {
  return (
    <div>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
      <p>Price: {product?.price}</p>
      <p>Quantity: {product?.qty}</p>
      <button onClick={() => console.log('Add to cart')}>Add to Cart</button>
      <ProductReview product={product} />
    </div>
  );
};

export default Product;