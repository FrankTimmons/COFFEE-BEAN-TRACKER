import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props){

  return(
    <React.Fragment>
      <h3>{props.bean.name} - {props.bean.roast}</h3>
      <h4>{props.bean.origin}</h4>
      <p>${props.bean.price} per pound.</p>
      <p>{props.bean.pounds} remaining.</p>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object
}

export default Bean;