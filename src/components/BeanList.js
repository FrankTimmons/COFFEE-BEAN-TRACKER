import React from "react";
import PropTypes from "prop-types";

function BeanList(props){
  return(
    <React.Fragment>
      {props.beanList.map((bean) =>
        <Bean
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

BeanList.props = {
  beanList: PropTypes.array
}

export default BeanList;