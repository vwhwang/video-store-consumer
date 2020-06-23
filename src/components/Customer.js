import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  const onCustomerClick =() => {
    props.setSelectedCustomerCallBack(props.customer);
  }

  return <button onClick = {onCustomerClick}>
    {props.customer.name}
  </button>

}

Customer.propTypes = {
  setSelectedCustomerCallBack: PropTypes.func.isRequired,
  customer: PropTypes.object
};

export default Customer