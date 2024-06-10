import {
  SEARCH_USERS,
  SET_FAV_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  APP_ERROR,
  CLEAR_ERROR,
} from '../type';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        queriedUser: action.payload.queriedUser
          ? action.payload.queriedUser
          : state.queriedUser,
        totalUsers: action.payload.total_count,
        users: action.payload.items,
        loading: false,
        error: null,
      };

    case SET_FAV_USERS:
      return {
        ...state,
        favUsers: action.payload,
        loading: false,
        error: null,
      };

    case CLEAR_USERS:
    case CLEAR_ERROR:
      return {
        ...state,
        queriedUser: '',
        totalUsers: 0,
        users: null,
        loading: false,
        error: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
        error: null,
      };

    case APP_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default githubReducer;
