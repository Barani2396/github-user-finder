import React, { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import EmptyStar from '../assets/EmptyStar';
import FullStar from '../assets/FullStar';

const Favourite = ({ user }) => {
  const githubContext = useContext(GithubContext);
  const { setFavUsers } = githubContext;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Set favorite on component load
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites) {
      favorites.forEach((fav) => {
        if (fav.id === user.id) {
          setIsFavorite(true);
        }
      });
    }
  }, []);

  // Handle favourite
  const handleFavorite = () => {
    user.fav = true;

    // Toggle favorite status state
    setIsFavorite(!isFavorite);

    // Save user data to local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!isFavorite) {
      favorites.push(user);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      const updatedFavorites = favorites.filter(
        (favUser) => favUser.id !== user.id
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setFavUsers(favorites);
  };

  return (
    <div>
      <a className='star star-user-item' onClick={handleFavorite}>
        {isFavorite ? <FullStar /> : <EmptyStar />}
      </a>
    </div>
  );
};

export default Favourite;
