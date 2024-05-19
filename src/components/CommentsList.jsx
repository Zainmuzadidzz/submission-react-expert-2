/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentsList({
  comments,
  authUser,
  upVoteCommentDetail,
  downVoteCommentDetail,
  neutralizeVoteCommentDetail,
}) {
  if (!comments || comments.length === 0) {
    return null;
  }
  return (
    <section className="notes-list">
      <div className="container px-0">
        <div className="row">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              {...comment}
              authUser={authUser}
              upVoteCommentDetail={upVoteCommentDetail}
              downVoteCommentDetail={downVoteCommentDetail}
              neutralizeVoteCommentDetail={neutralizeVoteCommentDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.string.isRequired,
      upVotesBy: PropTypes.array.isRequired,
      downVotesBy: PropTypes.array.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  authUser: PropTypes.object.isRequired,
  upVoteCommentDetail: PropTypes.func.isRequired,
  downVoteCommentDetail: PropTypes.func.isRequired,
  neutralizeVoteCommentDetail: PropTypes.func.isRequired,
};

export default CommentsList;
