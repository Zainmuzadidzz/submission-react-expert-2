/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDislike, AiFillDislike } from 'react-icons/ai';

function ButtonDownVoteThread({
  id,
  authUser,
  downVote,
  neutralizeVote,
  downVotesBy,
}) {
  const isDownVoted = downVotesBy.includes(authUser.id);

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neutralizeVote(id);
  };

  return (
    <div className="d-flex align-items-center">
      {isDownVoted ? (
        <button
          type="button"
          className="btn border-0 mb-1 p-0"
          onClick={onNeutralizeVoteClick}
        >
          <AiFillDislike />
        </button>
      ) : (
        <button
          type="button"
          className="btn border-0 mb-1 p-0"
          onClick={onDownVoteClick}
        >
          <AiOutlineDislike />
        </button>
      )}
      <span className="ms-1 mb-0">{downVotesBy.length}</span>
    </div>
  );
}

ButtonDownVoteThread.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.object.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  downVotesBy: PropTypes.array.isRequired,
};

export default ButtonDownVoteThread;
