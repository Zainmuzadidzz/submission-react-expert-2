import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ signOut }) {
  return (
    <nav className="navigation">
      <ul className="list-unstyled d-flex justify-content-center align-items-center gap-3 mb-0">
        <li>
          <nav>
            <Link to="/" className="text-decoration-none">
              <h4>Threads</h4>
            </Link>
          </nav>
        </li>
        <li>
          <nav>
            <Link to="/leaderboards" className="text-decoration-none">
              <h4>Leaderboards</h4>
            </Link>
          </nav>
        </li>
        <li>
          {/* <img
            src={photo}
            alt={name}
            title={name}
          /> */}
          <button
            type="button"
            onClick={signOut}
            className="text-decoration-none btn btn-outline-danger"
          >
            <h4>Logout</h4>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
