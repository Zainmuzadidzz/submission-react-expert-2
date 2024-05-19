/* eslint-disable import/named */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import ButtonUpVoteThread from './ButtonUpVoteThread';
import ButtonDownVoteThread from './ButtonDownVoteThread';

function CommentItem({
  id,
  owner,
  content,
  upVotesBy,
  downVotesBy,
  createdAt,
  authUser,
  upVoteCommentDetail,
  downVoteCommentDetail,
  neutralizeVoteCommentDetail,
}) {
  return (
    <div className="mb-4">
      <div className="d-flex gap-3 ">
        <img
          src={owner.avatar}
          alt="Avatar"
          className="rounded-circle me-2"
          style={{ width: '20px', height: '20px' }}
        />
        <h6>{owner.name}</h6>
      </div>
      <p className="border-bottom border-top py-2">{parse(content)}</p>
      <footer className="row align-items-center pt-2">
        <div className="col">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <ButtonUpVoteThread
                id={id}
                authUser={authUser}
                upVote={upVoteCommentDetail}
                neutralizeVote={neutralizeVoteCommentDetail}
                upVotesBy={upVotesBy}
              />
            </li>
            <li className="list-inline-item">
              <ButtonDownVoteThread
                id={id}
                authUser={authUser}
                downVote={downVoteCommentDetail}
                neutralizeVote={neutralizeVoteCommentDetail}
                downVotesBy={downVotesBy}
              />
            </li>
          </ul>
        </div>
        <div className="col text-end">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <p className="mb-0">{postedAt(createdAt)}</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.object.isRequired,
  upVoteCommentDetail: PropTypes.func.isRequired,
  downVoteCommentDetail: PropTypes.func.isRequired,
  neutralizeVoteCommentDetail: PropTypes.func.isRequired,
};

export default CommentItem;
