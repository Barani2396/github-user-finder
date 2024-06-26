import React, { forwardRef, useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';
import PaginationContext from '../../context/pagination/paginationContext';
import ScrollContext from '../../context/scroll/scrollContext';

const Search = forwardRef((props, ref) => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const paginationContext = useContext(PaginationContext);
  const scrollContext = useContext(ScrollContext);
  const { setAlert } = alertContext;
  const { users, searchUsers, clearUsers } = githubContext;
  const { clearPagination } = paginationContext;
  const { usersDivRef, scrollToDiv } = scrollContext;
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (users != null && users.length === 0) {
      setAlert('No users found, try again!', 'danger');
    }

    if (submitted && users.length > 0) {
      scrollToDiv(usersDivRef);
      setSubmitted(false);
    }
    // eslint-disable-next-line
  }, [users]);

  // On submit
  const onSubmit = (e) => {
    e.preventDefault();

    clearPagination();

    if (text === '') {
      setAlert('Please enter something', 'danger');
      clearUsers();
    } else {
      searchUsers(text, true);
      setText('');
      setSubmitted(true);
    }
  };

  // On change
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='search-container'>
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
      <div ref={usersDivRef}></div>
    </div>
  );
});

export default Search;
