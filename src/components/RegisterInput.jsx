/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="mt-4">
      <div className="mb-3">
        <label htmlFor="exampleInputtext" className="form-label">
          Username
        </label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={onNameChange}
          className="form-control"
          id="exampleInputtext"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        type="button"
        onClick={() => register({ name, email, password })}
        className="btn btn-primary"
      >
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
