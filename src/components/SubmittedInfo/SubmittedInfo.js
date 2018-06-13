import React from 'react';
import classes from './SubmittedInfo.css';

const submittedInfo = (props) => {
  return (
    <div className={classes.SubmittedInfo} >
      <h2>{`Welcome ${props.firstName} ${props.lastName}!`}</h2>
      <p>{`You live at: ${props.streetAddress} ${props.city} ${props.zipCode} ${props.country}`} </p>
      <button onClick={() => props.resetPage()} className={classes.ResetButton}>Reset</button>
    </div>
  )
};

export default submittedInfo;
