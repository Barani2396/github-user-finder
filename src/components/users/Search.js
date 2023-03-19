import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'danger');
    } else {
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='card'>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-blue btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
