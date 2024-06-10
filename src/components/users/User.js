import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import PaginationContext from '../../context/pagination/paginationContext';
import Repos from '../repos/Repos';
import Spinner from '../layouts/Spinner';
import Favourite from '../misc/Favourite';

const User = () => {
  const githubContext = useContext(GithubContext);
  const paginationContext = useContext(PaginationContext);
  const { user, error, loading, getUser, getUserRepos, clearError } =
    githubContext;
  const { clearPagination } = paginationContext;
  const { loginName } = useParams();
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  useEffect(() => {
    getUser(loginName);
    getUserRepos(loginName);
    // eslint-disable-next-line
  }, []);

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
      <div className='mt-5' style={{ minHeight: '750px' }}>
        <div className='d-flex justify-content-between mb-3'>
          <Link to='/' className='btn btn-native'>
            &larr; Back to search
          </Link>
          <span className='d-flex align-items-center'>
            <label className='me-sm-2 me-1'>Hireable:</label>
            {hireable ? (
              <i className='fas fa-check text-success ms-1 my-auto' />
            ) : (
              <i className='fas fa-times-circle text-danger' />
            )}
          </span>
        </div>
        <div className='card mb-3'>
          <div className='row'>
            <Favourite user={user} />
            <div className='col-md-6 text-center py-lg-4 py-3'>
              <img
                src={avatar_url}
                alt=''
                className='rounded-circle mb-3'
                style={{ width: '150px' }}
              />
              <h1 className='mb-1'>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div className='col-md-6 m-auto py-lg-4 py-3 pe-lg-2 px-4'>
              {bio && (
                <>
                  <h3 className='mb-2'>Bio</h3>
                  <p className='mb-3'>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target='_blank'
                rel='noreferrer'
                className='btn btn-native mb-3'
              >
                Visit profile &rarr;
              </a>
              <ul>
                <li>
                  {login && (
                    <>
                      <strong>Username: </strong> {login}
                    </>
                  )}
                </li>
                <li>
                  {company && (
                    <>
                      <strong>Company: </strong> {company}
                    </>
                  )}
                </li>
                <li>
                  {blog && (
                    <>
                      <strong>blog: </strong> {blog}
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row justify-content-around mb-3 text-center'>
          <div className='col-6 col-lg-3 mb-3 mb-lg-0'>
            <div className='badge text-bg-success fst-italic w-100'>
              Followers: {followers}
            </div>
          </div>
          <div className='col-6 col-lg-3 mb-3 mb-lg-0'>
            <div className='badge text-bg-info fst-italic w-100'>
              Following: {following}
            </div>
          </div>
          <div className='col-6 col-lg-3'>
            <div className='badge text-bg-warning fst-italic w-100'>
              Public Repos: {public_repos}
            </div>
          </div>
          <div className='col-6 col-lg-3'>
            {' '}
            <div className='badge text-bg-light fst-italic w-100'>
              Public Gist: {public_gists}
            </div>
          </div>
        </div>
        <Repos />
      </div>
    );
  }
};

export default User;
