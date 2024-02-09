import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedUserItem = ({
  user: { name, login, avatar_url, html_url, type, followers, public_repos },
  num,
}) => {
  return (
    <>
      <span className='fg-muted-text mt-1 mt-md-0 mb-auto mb-md-0'>{num}</span>
      <div className='mx-3 mb-auto mb-md-0'>
        <img
          src={avatar_url}
          className='rounded-circle'
          style={{ width: '48px' }}
        />
      </div>
      <div className='d-sm-flex flex-auto'>
        <div className='col-sm-8 d-md-flex'>
          <div className='col-md-6 m-auto'>
            <h1 className='fs-5'>{name}</h1>
            <p className='fg-blue-text'>{login}</p>
          </div>
          <div className='col-md-6 m-auto'>
            <div className='mt-2 mb-3 my-md-0'>
              <div className='d-flex align-items-center'>
                {type == 'User' ? (
                  <div className='user-svg'>
                    <img src='/assets/user.svg' alt='User' />
                  </div>
                ) : (
                  <div className='organization-svg'>
                    <img src='/assets/organization.svg' alt='Organization' />
                  </div>
                )}{' '}
                <span>{type}</span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='followers-svg'>
                  <img src='/assets/followers.svg' alt='Followers' />
                </div>
                <span>
                  {followers}{' '}
                  <label className='fg-muted-text'>
                    {public_repos <= 1 ? 'follower' : 'followers'}
                  </label>
                </span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='repo-svg'>
                  <img src='/assets/repo.svg' alt='Repository' />
                </div>
                <span>
                  {public_repos}{' '}
                  <label className='fg-muted-text'>
                    {public_repos <= 1 ? 'repository' : 'repositories'}
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4 d-flex justify-content-sm-end m-auto'>
          <Link to={`user/${login}`} className='btn btn-native'>
            More &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedUserItem;
