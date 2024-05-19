/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

export default function InputPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <main className="container">
      <section className="login-page mt-4">
        <h2>Diskusi Baru</h2>
        <ThreadInput addThread={onAddThread} />
      </section>
    </main>
  );
}

InputPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
};
