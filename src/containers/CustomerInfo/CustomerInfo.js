import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './CustomerInfo.css';
import CustomerName from '../../components/CustomerName/CustomerName';
import CustomerAddress from '../../components/CustomerAddress/CustomerAddress';
import SubmittedInfo from '../../components/SubmittedInfo/SubmittedInfo';
import * as actions from '../../store/actions';

class CustomerInfo extends Component {
  state = {
    currentCustomerPage: 'name',
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    country: ''
  }

  componentDidMount() {
    this.props.onInitWindowWidth(window.innerWidth)
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.props.onInitWindowWidth(window.innerWidth);
  };

  handleMobilePageChange = (page) => {
    this.setState({
      currentCustomerPage: page
    });
  };

  handleFirstNameChange = (firstName) => {
    this.setState({
      firstName
    });
  };

  handleLastNameChange = (lastName) => {
    this.setState({
      lastName
    });
  };

  handleStreetAddressChange = (streetAddress) => {
    this.setState({
      streetAddress
    });
  };

  handleCityChange = (city) => {
    this.setState({
      city
    });
  };

  handleZipCodeChange = (zipCode) => {
    this.setState({
      zipCode
    });
  };

  handleCountryChange = (country) => {
    this.setState({
      country
    });
  };

  handleResetPage = () => {
    this.setState({
      currentCustomerPage: 'name',
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      zipCode: '',
      country: ''
    });
  };

  render() {
    const { width } = this.props;
    const isMobile = width <= 500;
    let currentMobilePage = null;

    if (this.state.currentCustomerPage === 'submitted') {
      return (
        <div className={classes.CustomerInfo}>
          <SubmittedInfo
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            streetAddress={this.state.streetAddress}
            city={this.state.city}
            zipCode={this.state.zipCode}
            country={this.state.country}
            resetPage={this.handleResetPage}
          />
        </div>
      );
    } else if (isMobile) {
      if (this.state.currentCustomerPage === 'name') {
        currentMobilePage = <CustomerName
                              isMobile
                              firstName={this.state.firstName}
                              lastName={this.state.lastName}
                              changePage={this.handleMobilePageChange}
                              changeFirstName={this.handleFirstNameChange}
                              changeLastName={this.handleLastNameChange}
                            /> ;
      } else if (this.state.currentCustomerPage === 'address') {
        currentMobilePage = <CustomerAddress
                              isMobile
                              streetAddress={this.state.streetAddress}
                              city={this.state.city}
                              zipCode={this.state.zipCode}
                              country={this.state.country}
                              changePage={this.handleMobilePageChange}
                              changeStreetAddress={this.handleStreetAddressChange}
                              changeCity={this.handleCityChange}
                              changeZipCode={this.handleZipCodeChange}
                              changeCountry={this.handleCountryChange}
                            /> ;
      }
      return (
        <div className={classes.CustomerInfo}>
          {currentMobilePage}
        </div>
      );
    } else {
      return (
        <div className={classes.CustomerInfo}>
          <CustomerName
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            changeFirstName={this.handleFirstNameChange}
            changeLastName={this.handleLastNameChange}
          />
          <CustomerAddress
            streetAddress={this.state.streetAddress}
            city={this.state.city}
            zipCode={this.state.zipCode}
            country={this.state.country}
            changePage={this.handleMobilePageChange}
            changeStreetAddress={this.handleStreetAddressChange}
            changeCity={this.handleCityChange}
            changeZipCode={this.handleZipCodeChange}
            changeCountry={this.handleCountryChange}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    width: state.currentWindowWidth.width
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInitWindowWidth: (width) => dispatch(actions.changeWindowWidth(width))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);
