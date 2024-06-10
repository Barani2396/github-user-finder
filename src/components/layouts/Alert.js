import React, { forwardRef, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';
import ScrollContext from '../../context/scroll/scrollContext';

const Alert = forwardRef((props, ref) => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const scrollContext = useContext(ScrollContext);
  const { meta, visible } = alertContext.alert;
  const { users, user } = githubContext;
  const { alertDivRef, scrollToDiv } = scrollContext;
  const location = useLocation();

  useEffect(() => {
    if (
      (users === null && alertDivRef.current) ||
      (Object.keys(user).length > 0 && alertDivRef.current)
    ) {
      scrollToDiv(alertDivRef);
    }
  }, [users, user, location]);

  return (
    <div
      className={`alert alert-${
        meta != null && meta.type
      } d-block w-100 text-center p-1 ${visible ? 'fadeIn' : 'fadeOut'}`}
      ref={alertDivRef}
    >
      {meta != null && (
        <>
          <i className='fas fa-info-circle'></i> {meta.msg}
        </>
      )}
    </div>
  );
});

export default Alert;
