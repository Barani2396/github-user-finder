import {
  SET_TOTAL_PAGES,
  ON_PREVIOUS_CLICK,
  ON_PAGE_CLICK,
  ON_NEXT_CLICK,
  CLEAR_PAGINATION,
} from '../type';

const paginationReducer = (state, action) => {
  const { currentPage, pageNumberLimit, minPageLimit, maxPageLimit } = state;

  switch (action.type) {
    case SET_TOTAL_PAGES:
      return {
        ...state,
        maxPageLimit: action.payload.totalPages,
        pageList: action.payload.pageList,
      };

    case ON_PREVIOUS_CLICK:
      return {
        ...state,
        maxPageLimit:
          (currentPage - 1) % pageNumberLimit === 0
            ? maxPageLimit - pageNumberLimit
            : maxPageLimit,
        minPageLimit:
          (currentPage - 1) % pageNumberLimit === 0
            ? minPageLimit - pageNumberLimit
            : minPageLimit,
        currentPage: currentPage - 1,
      };

    case ON_PAGE_CLICK:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ON_NEXT_CLICK:
      return {
        ...state,
        maxPageLimit:
          currentPage + 1 > maxPageLimit
            ? maxPageLimit + pageNumberLimit
            : maxPageLimit,
        minPageLimit:
          currentPage + 1 > maxPageLimit
            ? currentPage + 1 - Math.floor(pageNumberLimit / 2)
            : minPageLimit,
        currentPage: currentPage + 1,
      };

    case CLEAR_PAGINATION:
      return {
        ...state,
        pageNumberLimit: 5,
        currentPage: 1,
        minPageLimit: 0,
        maxPageLimit: 0,
        pageList: [],
      };

    default:
      return state;
  }
};

export default paginationReducer;
