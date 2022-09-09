import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props){
  const { bean } = props;
  return(
    <React.Fragment>
      <h3>{bean.name} - {bean.roast}</h3>
      <h4>{bean.origin}</h4>
      <p>${bean.price} per pound.</p>
      <p>{bean.pounds} remaining.</p>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object
}

export default BeanDetail;