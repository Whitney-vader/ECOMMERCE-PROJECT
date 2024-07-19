import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductList from './components/ProductList';
import ProductReview from './components/ProductReview';
import AdminDashboard from './components/Admin';
import AddProduct from './components/AddProduct';
import ViewSales from './components/ViewSales';
import Categories from './components/Categories';
import CreateCategory from './components/CreateCategory';

const App = () => {

    return (
        <BrowserRouter>
            <div className="container-fluid p-0 m-0">
                <Navbar />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id/review" element={<ProductReview />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/add_product" element={<AddProduct />} />
                    <Route path="/admin/view_sales" element={<ViewSales />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/create" element={<CreateCategory />} />
                </Routes>
            </div >
        </BrowserRouter>
    )
}

//ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);