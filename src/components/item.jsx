/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/named */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsReply } from 'react-icons/bs';
import parse from 'html-react-parser';
import { postedAt } from '../utils';
import ButtonDownVoteThread from './ButtonDownVoteThread';
import ButtonUpVoteThread from './ButtonUpVoteThread';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neutralizeVote,
  owner,
  authUser,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div className="col-md-6">
      <article className="card mb-4">
        <div className="card-body">
          <header className="pb-2">
            <h3 className="card-title">
              <a onClick={onThreadClick}>{title}</a>
            </h3>
            <div className="row justify-content-center">
              <div className="col">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item border p-1 rounded">
                    <span className="mb-0">{category}</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div className="border-top border-bottom">
            <div className="note-item__body card-text my-2">{parse(body)}</div>
          </div>

          <footer className="row align-items-center pt-2">
            <div className="col">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <ButtonUpVoteThread
                    id={id}
                    authUser={authUser}
                    upVote={upVote}
                    downVote={downVote}
                    neutralizeVote={neutralizeVote}
                    upVotesBy={upVotesBy}
                  />
                </li>
                <li className="list-inline-item">
                  <ButtonDownVoteThread
                    id={id}
                    authUser={authUser}
                    upVote={upVote}
                    downVote={downVote}
                    neutralizeVote={neutralizeVote}
                    upVotesBy={upVotesBy}
                    downVotesBy={downVotesBy}
                  />
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <button className="btn border-0 mb-1 p-0">
                      <BsReply />
                    </button>
                    <span className="ms-1 mb-0">{totalComments}</span>
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
                  <span className="mb-0">
                    dibuat oleh
                    {owner.name}
                  </span>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  authUser: PropTypes.object.isRequired,
};

export default ThreadItem;
