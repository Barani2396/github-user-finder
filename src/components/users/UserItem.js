import React from 'react';
import { Link } from 'react-router-dom';
import Favourite from '../misc/Favourite';

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='rounded-circle m-auto my-3'
        style={{ width: '75px' }}
      />
      <h3 className='fs-4'>{login}</h3>
      <Favourite user={user} />
      <div>
        <Link to={`user/${login}`} className='btn btn-native p-1 w-25 my-3'>
          More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
