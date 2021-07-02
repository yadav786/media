import React, { useState, useEffect } from 'react';
import 'Styles/alert.scss';

const initialState = {
  showAlert: false,
  alertObj: {},
};

const Alert = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const timer = setTimeout(() => {
      setState({
        showAlert: false,
      });
    }, 4000);
    setState({
      showAlert: true,
      alertObj: 'Something Went Wrong',
    });
    return () => clearTimeout(timer);
  }, []);
  const removeAlert = () => {
    setState({
      showAlert: false,
    });
  };
  return (
    <>
      {state.showAlert && (
        <div className={`alertBox ${state.alertObj.type}`}>
          <span> {state.alertObj.message} </span>
          <span className="cross" onClick={() => removeAlert()}>
            &#10005;{' '}
          </span>
        </div>
      )}
    </>
  );
};
export default Alert;
