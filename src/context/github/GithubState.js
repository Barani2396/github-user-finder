import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_FAV_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  APP_ERROR,
  CLEAR_ERROR,
} from '../type';

let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV != 'production') {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = GITHUB_CLIENT_ID;
  githubClientSecret = GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    queriedUser: '',
    totalUsers: 0,
    users: null,
    favUsers: JSON.parse(localStorage.getItem('favorites')) || [],
    user: {},
    repos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users
  const searchUsers = async (
    text,
    mainSearch = false,
    perPage = 30,
    pageNum = 1
  ) => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&per_page=${perPage}&page=${pageNum}&client_id=${githubClientID}
    &client_secret=${githubClientSecret}`
      );

      // Save the query text for pagination calls
      if (mainSearch) {
        res.data.queriedUser = text;
      }

      dispatch({ type: SEARCH_USERS, payload: res.data });
    } catch (error) {
      console.error('Error fetching GitHub users:', error);

      dispatch({
        type: APP_ERROR,
        payload: {
          title: 'Search API Limit Reached',
          msg: 'Too many requests. Please try again later.',
        },
      });
    }
  };

  // Set fav users
  const setFavUsers = (favorites) => {
    dispatch({ type: SET_FAV_USERS, payload: favorites });
  };

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Get user
  const getUser = async (username) => {
    setLoading();

    try {
      const res =
        await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}
    &client_secret=${githubClientSecret}`);

      dispatch({ type: GET_USER, payload: res.data });
    } catch (error) {
      console.error('Error fetching GitHub user:', error);

      dispatch({
        type: APP_ERROR,
        payload: {
          title: 'User API Limit Reached',
          msg: 'Too many requests. Please try again some other time.',
        },
      });
    }
  };

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}
      &client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear error
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <GithubContext.Provider
      value={{
        queriedUser: state.queriedUser,
        totalUsers: state.totalUsers,
        users: state.users,
        favUsers: state.favUsers,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        error: state.error,
        searchUsers,
        setFavUsers,
        clearUsers,
        getUser,
        getUserRepos,
        clearError,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
