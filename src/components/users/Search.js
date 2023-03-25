import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const [text, setText] = useState('');
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);

  const { setAlert } = alertContext;
  const { searchUsers } = githubContext;

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='card mt-5 mb-3'>
      <form className='p-4 p-sm-5' onSubmit={onSubmit}>
        <input
          className='d-block w-100 mb-4'
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          alt='Name'
        />
        <input
          className='btn btn-primary w-100'
          type='submit'
          value='Search'
          alt='Search'
        />
      </form>
    </div>
  );
};

export default Search;
