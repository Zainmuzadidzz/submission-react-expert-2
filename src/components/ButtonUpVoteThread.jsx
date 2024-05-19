/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

function ButtonUpVoteThread({
  id,
  authUser,
  upVote,
  neutralizeVote,
  upVotesBy,
}) {
  const isUpVoted = upVotesBy.includes(authUser.id);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neutralizeVote(id);
  };

  return (
    <div className="d-flex align-items-center">
      {isUpVoted ? (
        <button
          type="button"
          className="btn border-0 mb-1 p-0"
          onClick={onNeutralizeVoteClick}
        >
          <AiFillLike />
        </button>
      ) : (
        <button
          type="button"
          className="btn border-0 mb-1 p-0"
          onClick={onUpVoteClick}
        >
          <AiOutlineLike />
        </button>
      )}
      <span className="ms-1 mb-0">{upVotesBy.length}</span>
    </div>
  );
}

ButtonUpVoteThread.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.object.isRequired,
  upVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.array.isRequired,
};

export default ButtonUpVoteThread;
