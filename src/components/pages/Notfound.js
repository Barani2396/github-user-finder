import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className='m-5 text-center'>
      <h1 className='mb-3'>Page Not found</h1>
      <p className='lead mb-2'>Page you request does not exist</p>
      <p>
        Please click{' '}
        <Link className='link-primary' to='/'>
          search
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
