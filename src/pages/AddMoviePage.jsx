import React from 'react';

const AddMoviePage = () => {
  return (
    <>
      <h2>Add New Movie</h2>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="A beautiful movie" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="text" id="year" placeholder="1982" />
        </div>
        <div>
          <label htmlFor="runtime">Runtime in minutes</label>
          <input type="runtime" id="runtime" placeholder="90 mins" />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input type="genre" id="genre" placeholder="family,drama" />
        </div>
        <input type="submit" value="Add new movie" />
      </form>
    </>
  );
};

export default AddMoviePage;
