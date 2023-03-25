import React, { useContext } from 'react';

import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users, clearUsers } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {users.length > 0 && (
          <button className='btn btn-danger w-100 mb-3' onClick={clearUsers}>
            Clear Users
          </button>
        )}
        <div className='row justify-content-center'>
          {users.map((user) => (
            <div
              className='col-lg-4 col-md-6 col-12 mt-1 mb-3 m-auto'
              key={user.id}
            >
              <UserItem user={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
