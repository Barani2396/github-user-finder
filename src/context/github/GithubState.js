import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
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
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Search users
  const searchUsers = async (
    text,
    mainSearch = false,
    perPage = 30,
    pageNum = 1
  ) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&per_page=${perPage}&page=${pageNum}&client_id=${githubClientID}
      &client_secret=${githubClientSecret}`
    );

    // Save the query text for pagination calls
    if (mainSearch) {
      res.data.queriedUser = text;
    }

    dispatch({ type: SEARCH_USERS, payload: res.data });
  };

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Get user
  const getUser = async (username) => {
    setLoading();

    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}
    &client_secret=${githubClientSecret}`);

    dispatch({ type: GET_USER, payload: res.data });
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

  return (
    <GithubContext.Provider
      value={{
        queriedUser: state.queriedUser,
        totalUsers: state.totalUsers,
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
