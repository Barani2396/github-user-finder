import React, { useContext, useEffect, useState } from 'react';

import popularUsers from '../../data/popularUsers.json';
import FeaturedUserItem from './FeaturedUserItem';
import GithubContext from '../../context/github/githubContext';

const FeaturedUsers = () => {
  const githubContext = useContext(GithubContext);

  const { users, favUsers } = githubContext;

  const [selectedTab, setSelectedTab] = useState('popular');

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
      setSelectedTab(storedTab);
    }
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };

  if (users === null) {
    return (
      <div className='featured-container card'>
        <div className='p-3'>
          <ul className='d-flex justify-content-center'>
            <li
              className={`p-1 px-4 ${
                selectedTab === 'popular' ? 'active' : ''
              }`}
              onClick={() => handleTabChange('popular')}
            >
              Popular
            </li>
            <li
              className={`p-1 px-4 ${
                selectedTab === 'favorite' ? 'active' : ''
              }`}
              onClick={() => handleTabChange('favorite')}
            >
              Favorite
            </li>
          </ul>
        </div>
        <div className='featured-users'>
          {selectedTab === 'popular' && (
            <>
              {popularUsers.map((user, index) => (
                <article
                  className='featured-user d-flex align-items-center p-2'
                  key={user.id}
                >
                  <FeaturedUserItem user={user} num={index + 1} />
                </article>
              ))}
            </>
          )}
          {selectedTab === 'favorite' && (
            <>
              {favUsers && favUsers.length > 0 ? (
                favUsers.map((user, index) => (
                  <article className='featured-user d-flex p-2' key={user.id}>
                    <FeaturedUserItem user={user} num={index + 1} />
                  </article>
                ))
              ) : (
                <p className='fs-2 text-center p-5'>
                  Seems like you haven't added any favorites. Add them by
                  looking up from search.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
};

export default FeaturedUsers;
