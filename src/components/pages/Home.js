import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Search from '../users/Search';
import FeaturedUsers from '../users/FeaturedUsers';
import Users from '../users/Users';

const Home = () => {
  const githubContext = useContext(GithubContext);
  const { error } = githubContext;

  return (
    <>
      {error == null && <Search />}
      <FeaturedUsers />
      <Users />
    </>
  );
};

export default Home;
