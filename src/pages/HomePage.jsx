/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
} from '../states/threads/action';

function HomePage() {
  const authUser = useSelector((state) => state.authUser);
  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVote = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const filteredThreads = selectedCategory
    ? threads.filter((thread) => thread.category === selectedCategory)
    : threads;

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authUser,
  }));

  const categories = [...new Set(threads.map((thread) => thread.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <section className="home-page container">
      <h3 className="mt-2">Tags</h3>
      <div className="row justify-content-center mb-4">
        <div className="col">
          <ul className="list-inline mb-0">
            {categories.map((category) => (
              <li key={category} className="list-inline-item p-1 rounded">
                <button
                  className={`btn btn-outline-info ${
                    selectedCategory === category ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  #
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ThreadsList
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        neutralizeVote={onNeutralizeVote}
      />
      <div className="position-fixed bottom-0 end-0 p-3 d-flex justify-content-center align-items-center">
        <Link
          to="/threads"
          className="btn btn-primary action"
          type="button"
          title="Tambah"
        >
          <FaPlus className="m-1" />
        </Link>
      </div>
    </section>
  );
}

HomePage.propTypes = {
  threads: PropTypes.array,
  users: PropTypes.array,
  authUser: PropTypes.object,
};

export default HomePage;
