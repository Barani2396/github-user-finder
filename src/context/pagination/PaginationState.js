import React, { useReducer } from 'react';
import PaginationContext from './paginationContext';
import PaginationReducer from './paginationReducer';
import {
  SET_TOTAL_PAGES,
  ON_PREVIOUS_CLICK,
  ON_PAGE_CLICK,
  ON_NEXT_CLICK,
  CLEAR_PAGINATION,
} from '../type';

const PaginationState = (props) => {
  const initialState = {
    pageNumberLimit: 5,
    currentPage: 1,
    minPageLimit: 0,
    maxPageLimit: 0,
    pageList: [],
  };

  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  // Set total pages
  const setTotalPages = (totalCount, visiblePages = 0) => {
    let totalPages = Math.ceil(totalCount / 30);
    totalPages = totalPages < 30 ? totalPages : 30;

    console.log(totalPages);

    // Build page numbers list based on total number of pages
    let pageList = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Render only
    if (totalPages <= visiblePages) {
      pageList = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const desiredVisiblePages = 5;
      const bufferPages = Math.floor((desiredVisiblePages - 1) / 2);

      let startIndex;
      let endIndex;

      if (state.currentPage <= bufferPages) {
        startIndex = 0;
        endIndex = desiredVisiblePages;
      } else if (state.currentPage + bufferPages >= totalPages) {
        startIndex = totalPages - desiredVisiblePages;
        endIndex = totalPages;
      } else {
        startIndex = state.currentPage - bufferPages - 1;
        endIndex = startIndex + desiredVisiblePages;
      }

      pageList = Array.from(
        { length: endIndex - startIndex },
        (_, i) => startIndex + i + 1
      );
    }

    dispatch({ type: SET_TOTAL_PAGES, payload: { totalPages, pageList } });
  };

  // Execute previous click function
  const onPrevClick = () => {
    dispatch({ type: ON_PREVIOUS_CLICK });
  };

  // Execute page click function
  const onPageClick = (pageNumber) => {
    dispatch({ type: ON_PAGE_CLICK, payload: pageNumber });
  };

  // Execute next click function
  const onNextClick = () => {
    dispatch({ type: ON_NEXT_CLICK });
  };

  // Reset states
  const clearPagination = () => {
    dispatch({ type: CLEAR_PAGINATION });
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage: state.currentPage,
        minPageLimit: state.minPageLimit,
        maxPageLimit: state.maxPageLimit,
        pageList: state.pageList,
        setTotalPages,
        onPrevClick,
        onPageClick,
        onNextClick,
        clearPagination,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationState;
