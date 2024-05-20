/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './item';

function ThreadsList({
  threads, upVote, downVote, neutralizeVote,
}) {
  if (!threads || threads.length === 0) {
    return null;
  }

  return (
    <section className="notes-list">
      <div className="container px-0">
        <h1>Threads Tersedia</h1>
        <div className="row">
          {threads.map((thread) => (
            <ThreadItem
              key={thread.id}
              {...thread}
              upVote={upVote}
              downVote={downVote}
              neutralizeVote={neutralizeVote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      upVotesBy: PropTypes.array.isRequired,
      downVotesBy: PropTypes.array.isRequired,
      totalComments: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      authUser: PropTypes.object.isRequired,
    }),
  ).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadsList;
