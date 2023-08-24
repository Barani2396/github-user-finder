import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { meta, visible } = alertContext.alert;

  return (
    <div
      className={`alert alert-${
        meta != null && meta.type
      } d-block w-100 text-center p-1 ${visible ? 'fadeIn' : 'fadeOut'}`}
    >
      {meta != null && (
        <>
          <i className='fas fa-info-circle'></i> {meta.msg}
        </>
      )}
    </div>
  );
};

export default Alert;
