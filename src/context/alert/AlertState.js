import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, HIDE_ALERT, REMOVE_ALERT } from '../type';

const AlertState = (props) => {
  const initialState = {
    meta: null,
    visible: false,
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alert
  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    // Hide alert
    setTimeout(() => dispatch({ type: HIDE_ALERT }), 2500);

    // Remove alert
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3500);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert: showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
