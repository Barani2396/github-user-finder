import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='rounded-circle m-auto my-3'
        style={{ width: '75px' }}
      />
      <h3 className='fs-4'>{login}</h3>
      <div>
        <Link to={`user/${login}`} className='btn btn-primary w-25 my-3'>
          More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
