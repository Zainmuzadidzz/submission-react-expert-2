import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadsCommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');

  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };

  return (
    <div className="mt-4">
      <h3>Beri Komentar</h3>
      <div className="mb-3">
        <form>
          <textarea
            type="text"
            className="form-control"
            value={comment}
            onChange={onCommentChange}
            rows="3"
          />
          <div className="d-flex justify-content-end mt-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onCommentSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ThreadsCommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default ThreadsCommentInput;
