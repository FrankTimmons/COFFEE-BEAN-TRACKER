import React from "react";
import PropTypes from "prop-types";

function Bean(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name} - {props.roast}</h3>
        <h4>{props.origin}</h4>
        <p>${props.price} per pound.</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number, 
  id: PropTypes.string 
}

export default Bean;