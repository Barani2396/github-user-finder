import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
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
      };

    case CLEAR_USERS:
      return {
        ...state,
        queriedUser: '',
        totalUsers: 0,
        users: null,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
