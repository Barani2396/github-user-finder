import React, { useContext, useEffect } from 'react';
import PaginationContext from '../context/pagination/paginationContext';
import ScrollContext from '../context/scroll/scrollContext';

const Pagination = (props) => {
  const paginationContext = useContext(PaginationContext);
  const scrollContext = useContext(ScrollContext);
  const {
    currentPage,
    minPageLimit,
    maxPageLimit,
    pageList,
    setTotalPages,
    onPrevClick,
    onPageClick,
    onNextClick,
  } = paginationContext;
  const { usersDivRef, scrollToDiv } = scrollContext;
  const { totalCount, searchUsersOnPageClick, paginationClasses } = props;

  useEffect(() => {
    setTotalPages(totalCount, 5);

    if (totalCount > 0) {
      scrollToDiv(usersDivRef);
    }
    // eslint-disable-next-line
  }, []);

  // Execute previous click function
  const handlePrevClick = () => {
    onPrevClick();
    searchUsersOnPageClick(currentPage - 1);
  };

  // Execute page click function
  const handlePageClick = (e) => {
    e.preventDefault();
    onPageClick(Number(e.target.id));
    searchUsersOnPageClick(e.target.id);
  };

  // Execute next click function
  const handleNextClick = () => {
    onNextClick();
    searchUsersOnPageClick(currentPage + 1);
  };

  return (
    <nav>
      {pageList != null && pageList.length > 0 && (
        <ul className={paginationClasses}>
          <li
            className={`page-item ${
              currentPage === pageList[0] ? 'disabled' : ''
            }`}
          >
            <a
              className='page-link'
              onClick={handlePrevClick}
              title='Previous Page'
            >
              &#x2190;
            </a>
          </li>
          {pageList.map((page) => {
            if (page <= maxPageLimit && page > minPageLimit) {
              return (
                <li
                  key={page}
                  className={`page-item ${
                    currentPage === page ? 'active' : null
                  }`}
                >
                  <a
                    id={page}
                    onClick={handlePageClick}
                    className='page-link number'
                  >
                    {page}
                  </a>
                </li>
              );
            }
          })}
          <li
            className={`page-item ${
              currentPage === maxPageLimit ? 'disabled' : ''
            }`}
          >
            <a
              onClick={handleNextClick}
              className='page-link'
              title='Next Page'
            >
              &#x2192;
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
