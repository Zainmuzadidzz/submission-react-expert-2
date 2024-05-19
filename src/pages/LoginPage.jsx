/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
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
          <h2>Yukk, login test untuk menggunakan aplikasi.</h2>
          <LoginInput login={onLogin} />
          <p className="mt-2">
            "Belum punya akun?"
            <Link to="/register">Daftar di sini</Link>
          </p>
        </section>
      </main>
    </section>
  );
}

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default LoginPage;
