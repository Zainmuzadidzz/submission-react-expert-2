/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, setTitle, setTitleValue] = useInput('');
  const [category, setCategory, setCategoryValue] = useInput('');
  const [description, setDescription, setDescriptionValue] = useInput('');

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() && category.trim() && description.trim()) {
      addThread(title, description, category);
      setTitleValue('');
      setCategoryValue('');
      setDescriptionValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Judul
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTitle"
          value={title}
          onChange={setTitle}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputCategory" className="form-label">
          Kategori
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputCategory"
          value={category}
          onChange={setCategory}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputDeskripsi" className="form-label">
          Deskripsi
        </label>
        <textarea
          className="form-control"
          id="exampleInputDeskripsi"
          value={description}
          onChange={setDescription}
          rows="3"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
