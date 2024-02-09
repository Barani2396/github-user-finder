import React, { useState, useEffect, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import PaginationContext from '../../context/pagination/paginationContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const paginationContext = useContext(PaginationContext);
  const alertContext = useContext(AlertContext);

  const { users, searchUsers, clearUsers } = githubContext;
  const { clearPagination } = paginationContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (users != null && users.length === 0) {
      setAlert('No users found, try again!', 'danger');
    }
    // eslint-disable-next-line
  }, [users]);

  const onSubmit = (e) => {
    e.preventDefault();

    clearPagination();

    if (text === '') {
      setAlert('Please enter something', 'danger');
      clearUsers();
    } else {
      searchUsers(text, true);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='search-container mb-3'>
      <h1 className='text-center mb-3'>
        Looking for a particular GitHub user? Type it here.
      </h1>
      <form className='search-bar p-4 px-sm-0' onSubmit={onSubmit}>
        <input
          className=''
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
          alt='Name'
        />
        <button
          className='btn btn-primary'
          type='submit'
          alt='Search'
          title='Search'
        >
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
