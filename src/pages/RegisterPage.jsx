/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="border-bottom">
        <div className="d-flex justify-content-center align-items-center py-2 mx-4">
          <h1 className="flex-grow-1">
            <Link to="/" className="text-decoration-none">
              Threads App
            </Link>
          </h1>
        </div>
      </header>
      <main className="container">
        <section className="login-page mt-4">
          <h2>Isi form untuk mendaftar akun.</h2>
          <RegisterInput register={onRegister} />
          <p className="mt-2">
            "Sudah punya akun?"
            <Link to="/">Login</Link>
          </p>
        </section>
      </main>
    </section>
  );
}

RegisterPage.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default RegisterPage;
