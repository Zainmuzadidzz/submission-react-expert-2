/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/named */
import React from 'react';
import PropTypes from 'prop-types';
import { BsReply } from 'react-icons/bs';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import ButtonUpVoteThread from './ButtonUpVoteThread';
import ButtonDownVoteThread from './ButtonDownVoteThread';

function ThreadsDetail({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  comments,
  upVoteDetail,
  downVoteDetail,
  neutralizeVoteDetail,
  owner,
  authUser,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title mt-2">{title}</h1>
        <p className="btn btn-outline-info">{category}</p>
        <div className="border-top border-bottom my-3">
          <div className="card-text my-2">{parse(body)}</div>
        </div>

        <footer className="row align-items-center pt-2">
          <div className="col">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <ButtonUpVoteThread
                  id={id}
                  authUser={authUser}
                  upVote={upVoteDetail}
                  neutralizeVote={neutralizeVoteDetail}
                  upVotesBy={upVotesBy}
                />
              </li>
              <li className="list-inline-item">
                <ButtonDownVoteThread
                  id={id}
                  authUser={authUser}
                  downVote={downVoteDetail}
                  neutralizeVote={neutralizeVoteDetail}
                  downVotesBy={downVotesBy}
                />
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <button className="btn border-0 mb-1 p-0">
                    <BsReply />
                  </button>
                  <span className="ms-1 mb-0">{comments.length}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col text-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <span className="mb-0">{postedAt(createdAt)}</span>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="mb-0">
                    dibuat oleh
                    {' '}
                    {owner.name}
                  </span>
                  <img
                    src={owner.avatar}
                    alt="Avatar"
                    className="rounded-circle ms-2"
                    style={{ width: '20px', height: '20px' }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

ThreadsDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  upVoteDetail: PropTypes.func.isRequired,
  downVoteDetail: PropTypes.func.isRequired,
  neutralizeVoteDetail: PropTypes.func.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadsDetail;
