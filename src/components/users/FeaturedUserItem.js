import React from 'react';
import { Link } from 'react-router-dom';
import userSvg from '../assets/user.svg';
import organizationSvg from '../assets/organization.svg';
import followersSvg from '../assets/followers.svg';
import repoSvg from '../assets/repo.svg';

const FeaturedUserItem = ({
  user: { fav, name, login, id, avatar_url, type, followers, public_repos },
  num,
  onRemoveFromFavorites,
}) => {
  // Handle unfavourite
  const unFavourite = () => {
    onRemoveFromFavorites(id);
  };

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
          {!fav ? (
            <div className='col-md-6 m-auto'>
              <h1 className='fs-5'>{name}</h1>
              <p className='fg-blue-text'>{login}</p>
            </div>
          ) : (
            <div className='col-md-6 m-auto'>
              <h1 className='fs-5'>{login}</h1>
              <div className='d-flex align-items-center mt-2 mb-3 my-md-0'>
                {type == 'User' ? (
                  <div className='user-svg'>
                    <img src={userSvg} alt='User' />
                  </div>
                ) : (
                  <div className='organization-svg'>
                    <img src={organizationSvg} alt='Organization' />
                  </div>
                )}{' '}
                <span>{type}</span>
              </div>
            </div>
          )}
          <div className='col-md-6 m-auto'>
            {!fav ? (
              <div className='mt-2 mb-3 my-md-0'>
                <div className='d-flex align-items-center'>
                  {type == 'User' ? (
                    <div className='user-svg'>
                      <img src={userSvg} alt='User' />
                    </div>
                  ) : (
                    <div className='organization-svg'>
                      <img src={organizationSvg} alt='Organization' />
                    </div>
                  )}{' '}
                  <span>{type}</span>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='followers-svg'>
                    <img src={followersSvg} alt='Followers' />
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
                    <img src={repoSvg} alt='Repository' />
                  </div>
                  <span>
                    {public_repos}{' '}
                    <label className='fg-muted-text'>
                      {public_repos <= 1 ? 'repository' : 'repositories'}
                    </label>
                  </span>
                </div>
              </div>
            ) : (
              <Link to={`user/${login}`} className='btn btn-native'>
                More &rarr;
              </Link>
            )}
          </div>
        </div>
        <div className='col-sm-4 d-flex justify-content-sm-end m-auto'>
          {!fav ? (
            <Link to={`user/${login}`} className='btn btn-native p-2'>
              More &rarr;
            </Link>
          ) : (
            <button
              className='btn btn-danger p-1 mt-3 mt-sm-0'
              onClick={unFavourite}
              data-login-id={id}
            >
              Unfavorite
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedUserItem;
