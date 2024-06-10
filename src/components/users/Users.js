import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import PaginationContext from '../../context/pagination/paginationContext';
import UserItem from './UserItem';
import Pagination from '../../utils/Pagination';
import Spinner from '../layouts/Spinner';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const paginationContext = useContext(PaginationContext);
  const {
    loading,
    error,
    queriedUser,
    totalUsers,
    users,
    clearUsers,
    clearError,
    searchUsers,
  } = githubContext;
  const { clearPagination } = paginationContext;

  // Search users on page click
  const searchUsersOnPageClick = (currentPage) => {
    searchUsers(queriedUser, false, 30, currentPage);
  };

  // Clear users and pagination states
  const clearStates = () => {
    clearUsers();
    clearPagination();
  };

  // Clear error
  const clearErrorState = () => {
    clearError();
    clearPagination();
  };

  if (error != null) {
    return (
      <div className='text-center mt-5'>
        <h1>{error.title}</h1>
        <p className='fs-2 text-center p-3'>Error: {error.msg}</p>
        <button
          className='rounded-circle btn-warning d-flex justify-content-center align-items-center m-auto mb-5'
          onClick={clearErrorState}
          title='Clear Error'
        >
          <i class='fa-solid fa-rotate-right'></i>
        </button>
      </div>
    );
  } else if (loading) {
    return (
      <div className='spinner'>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className='pt-3'>
        {users != null && users.length > 0 && (
          <>
            <button
              className='rounded-circle btn-danger d-flex justify-content-center align-items-center m-auto mb-5'
              onClick={clearStates}
              title='Clear Users'
            >
              <i className='fa-solid fa-x'></i>
            </button>
            <hr className='mb-4' />
            {totalUsers > 30 && (
              <Pagination
                totalCount={totalUsers}
                searchUsersOnPageClick={searchUsersOnPageClick}
                paginationClasses={
                  'pagination pagination-sm justify-content-center mb-2'
                }
              />
            )}
            <div className='row justify-content-center'>
              {users.map((user) => (
                <div
                  className='col-lg-4 col-md-6 col-12 mt-3 m-auto'
                  key={user.id}
                >
                  <UserItem user={user} key={user.id} />
                </div>
              ))}
            </div>
            {totalUsers > 30 && (
              <Pagination
                totalCount={totalUsers}
                searchUsersOnPageClick={searchUsersOnPageClick}
                paginationClasses={
                  'pagination pagination-sm justify-content-center mt-4'
                }
              />
            )}
            <hr className='mt-4' />
          </>
        )}
      </div>
    );
  }
};

export default Users;
