import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Alert from 'react-bootstrap/Alert';

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      const body = {
        username: data.username,
        email: data.email,
        password: data.password,
      };

      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };

      fetch('/auth/signup', requestData)
       .then((res) => res.json())
       .then((data) => {
          setServerResponse(data.message);
          setShow(true);
        })
       .catch((err) => console.log(err));

      reset();
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="form lm_form">
          {show? (
            <>
              <Alert
                variant={serverResponse.includes('already')? 'danger' : 'uccess'}
                onClose={() => setShow(false)}
                dismissible
              >
                <p>{serverResponse}</p>
              </Alert>

              <h1>Signup</h1>
            </>
          ) : (
            <h1>Signup</h1>
          )}

          <form onSubmit={handleSubmit(submitForm)}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                {...register('username', { required: true, maxLength: 25 })}
              />
            </Form.Group>

            {errors.username && (
              <p style={{ color: 'ed' }}>
                <small>Username is required</small>
              </p>
            )}
            {errors.username?.type === 'axLength' && (
              <p style={{ color: 'ed' }}>
                <small>Max characters should be 25</small>
              </p>
            )}

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                {...register('email', { required: true, maxLength: 80 })}
              />
            </Form.Group>

            {errors.email && (
              <p style={{ color: 'ed' }}>
                <small>Email is required</small>
              </p>
            )}
            {errors.email?.type === 'axLength' && (
              <p style={{ color: 'ed' }}>
                <small>Max characters should be 80</small>
              </p>
            )}

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                {...register('password', { required: true, minLength: 8 })}
              />
            </Form.Group>

            {errors.password && (
              <p style={{ color: 'ed' }}>
                <small>Password is required</small>
              </p>
            )}
            {errors.password?.type === 'inLength' && (
              <p style={{ color: 'ed' }}>
                <small>Min characters should be 8</small>
              </p>
            )}

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Your password"
                {...register('confirmPassword', { required: true, minLength: 8 })}
              />
            </Form.Group>

            {errors.confirmPassword && (
              <p style={{ color: 'ed' }}>
                <small>Confirm Password is required</small>
              </p>
            )}
            {errors.confirmPassword?.type === 'inLength' && (
              <p style={{ color: 'ed' }}>
                <small>Min characters should be 8</small>
              </p>
            )}

            <Form.Group>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form.Group>

            <Form.Group>
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </Form.Group>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
