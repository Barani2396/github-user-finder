import React from 'react';

import Search from '../users/Search';
import FeaturedUsers from '../users/FeaturedUsers';
import Users from '../users/Users';

const Home = () => {
  return (
    <>
      <Search />
      <FeaturedUsers />
      <Users />
    </>
  );
};

export default Home;
