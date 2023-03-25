import React, { useReducer, userReducer } from 'react';
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

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Search users
  const searchUsers = async (text) => {
    setLoading();

    console.log(text);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    console.log(res.data.items);

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Get user
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`);

    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };

  return (
    <GithubContext.Provider
      value={{
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
