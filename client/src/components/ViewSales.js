import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewSales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('/api/sales')
      .then(response => {
        setSales(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>View Sales</h2>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.user_id} - {sale.item_id} - {sale.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSales;