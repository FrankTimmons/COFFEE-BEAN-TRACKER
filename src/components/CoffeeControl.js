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

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewBeanToList = (newBean) => {
    const newMainBeanList = this.state.mainBeanList.concat(newBean);
    this.setState({mainBeanList: newMainBeanList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedBean = (id) => {
    const newSelectedBean = this.state.mainBeanList.filter(bean => bean.id === id)[0];
    this.setState({selectedBean: newSelectedBean});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBean != null) {
      currentlyVisibleState = <BeanDetail bean = {this.selectedBean} />
      buttonText = "Return to Bean List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeanForm onNewBeanCreation = {this.handleAddingNewBeanToList} />;
      buttonText = "Return to Bean List";
    } else {
      currentlyVisibleState = <BeanList beanList = {this.mainBeanList} onBeanSelection = {this.handleChangingSelectedBean}/>;
      buttonText = "Add Bean";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;