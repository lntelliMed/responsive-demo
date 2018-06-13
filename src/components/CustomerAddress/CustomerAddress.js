import React from 'react';
import classes from './CustomerAddress.css';

const customerAddress = (props) => {
  return (
    <div className={classes.CustomerAddress} >
        <fieldset align="center">
          <legend>Address</legend>
          <label>Street Address: </label>
          <input type="text" onChange={(event) => props.changeStreetAddress(event.target.value)} value={props.streetAddress} />
          <br />
          <label>City: </label>
          <input type="text" onChange={(event) => props.changeCity(event.target.value)} value={props.city} />
          <br />
          <label>Zip Code: </label>
          <input type="text" onChange={(event) => props.changeZipCode(event.target.value)} value={props.zipCode} />
          <br />
          <label>Country: </label>
          <input type="text" onChange={(event) => props.changeCountry(event.target.value)} value={props.country} />
        </fieldset>
        <div className={classes.ButtonGroup} >
          {props.isMobile ? <button onClick={() => props.changePage('name')} className={classes.Button}>Prev</button> : null}
        <button onClick={() => props.changePage('submitted')}  className={classes.Button}>Submit</button>
        </div>
    </div>
  )
};

export default customerAddress;
