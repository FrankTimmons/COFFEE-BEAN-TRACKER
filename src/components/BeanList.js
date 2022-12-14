import React from "react";
import PropTypes from "prop-types";
import Bean from "./Bean";

function BeanList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.beanList.map((bean) =>
        <Bean
          whenBeanClicked={props.onBeanSelection}
          name={bean.name}
          price={bean.price}
          origin={bean.origin}
          roast={bean.roast}
          id={bean.id}
          key={bean.id}
        />
      )}
    </React.Fragment>
  );
}

BeanList.propTypes = {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func
}

export default BeanList;