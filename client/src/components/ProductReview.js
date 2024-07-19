import React, { useState } from 'react';

const ProductReview = () => {
const [rating, setRating] = useState(0);
const [comment, setComment] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
console.log('Review submitted:', rating, comment);
};

return (
<div>
<h2>Product Review</h2>
<form onSubmit={handleSubmit}>
<label>
Rating:
<select value={rating} onChange={(event) => setRating(event.target.value)}>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</label>
<br />
<label>
Comment:
<textarea value={comment} onChange={(event) => setComment(event.target.value)} />
</label>
<br />
<button type="submit">Submit Review</button>
</form>
</div>
);
};

export default ProductReview;
