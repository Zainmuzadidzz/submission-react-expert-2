/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src={user.avatar}
          alt="Avatar"
          className="rounded-circle me-2"
          style={{ width: '40px', height: '40px' }}
        />
        {user.name}
      </div>
      <span className="bg-primary text-white badge badge-pill h5">{score}</span>
    </li>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
