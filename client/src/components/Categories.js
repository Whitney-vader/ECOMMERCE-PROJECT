import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth';
// import Category from './Category';
// import { Modal, Form, Button, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import Searchbar from './Searchbar'; 

<Link to="/some-route">Some Link</Link>

const LoggedInHome = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteshow, setDeleteShow] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [searchbar, setSearchbar] = useState('');

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setSearchbar(inputValue);
  };

  const getAllCategories = () => {
    return fetch('/category/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  };

  const filteredCategories = (search) => {
    const object = {
      input: search,
    };

    const requestData = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(object),
    };

    fetch('/category/search', requestData)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  };

  const getAllCategoriesSearch = () => {
    filteredCategories(searchbar);
    setSearchbar('');
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const closeModal = () => {
    setShow(false);
  };

  const closeModalDelete = () => {
    setDeleteShow(false);
  };

  const deleteModal = (id) => {
    setDeleteShow(true);
    setCategoryId(id);
  };

  const showModal = (id) => {
    setShow(true);
    setCategoryId(id);

    categories.forEach((category, key) => {
      if (category.id === id) {
        setValue('name', category.name);
      }
    });
  };

  let token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');

  const updateCategory = (data) => {
    try {
      const requestData = {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
        body: JSON.stringify(data),
      };

      fetch(`/category/category/${categoryId}`, requestData)
        .then((res) => res.json())
        .then((data) => {
          navigate('/home');
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    try {
      const requestData = {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      };

      fetch(`/category/category/${id}`, requestData)
        .then((res) => res.json())
        .then((data) => {
          getAllCategories();
          setDeleteShow(false);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="categories container-fluid lm_main">
      {/* ... */}
    </div>
  );
};

const LoggedOutHome = () => {
  return (
    <div className="users">
      <h1>Categorie Non Loggato</h1>
      <Link className="btn btn-primary btn-lg btn-submit" to="/signup">
        Signup
      </Link>
    </div>
  );
};

const Categories = () => {
  const [logged] = useAuth();
  return (
    <div>
      {logged ? <LoggedInHome /> : <LoggedOutHome />}
    </div>
  );
};

           


export default Categories;