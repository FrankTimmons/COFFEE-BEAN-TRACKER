import React from "react";
import BeanList from "./BeanList";

class CoffeeControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeanList: [],
      selectedBean: null
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBean != null) {
      currentlyVisibleState = <BeanDetail />
      buttonText = "Return to Bean List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeanForm />;
      buttonText = "Return to Bean List";
    } else {
      currentlyVisibleState = <BeanList beanList = {this.mainBeanList}/>;
      buttonText = "Add Bean";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default CoffeeControl;