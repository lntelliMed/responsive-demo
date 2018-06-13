import React from 'react';
import classes from './CustomerName.css';

const customerName = (props) => {
    return (
      <div className={classes.CustomerName} >
        <fieldset align="center">
          <legend>Customer Name</legend>
          <label>First Name: </label>
          <input type="text" onChange={(event) => props.changeFirstName(event.target.value)} value={props.firstName} />
          <br />
          <label>Last Name: </label>
          <input type="text" onChange={(event) => props.changeLastName(event.target.value)} value={props.lastName} />
          <br />
        </fieldset>
        {props.isMobile ? <button onClick={() => props.changePage('address')} className={classes.NextButton}>Next</button> : null}
      </div>
    )
};

export default customerName;
