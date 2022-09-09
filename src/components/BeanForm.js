import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function BeanForm(props) {

  function handleNewBeanFormSubmission(event) {
    event.preventDefault();
    props.onNewBeanCreation(
      {
        name: event.target.name.value, 
        roast: event.target.roast.value, 
        origin: event.target.origin.value,
        price: event.target.price.value,
        pounds: 130,
        id: v4()
      }
    )
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewBeanFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='number'
          name='price'
          placeholder='Price per Pound' />
        <button type='submit'>Add new bean type!</button>
      </form>
    </React.Fragment>
  );
}

BeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default BeanForm;