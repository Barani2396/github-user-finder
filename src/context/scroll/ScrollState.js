import React, { useRef } from 'react';
import ScrollContext from './scrollContext';

const ScrollState = ({ children }) => {
  const alertDivRef = useRef(null);
  const usersDivRef = useRef(null);

  // Scroll to div function
  const scrollToDiv = (divRef) => {
    if (divRef && divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ alertDivRef, usersDivRef, scrollToDiv }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollState;
