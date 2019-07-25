import React, { Component } from 'react';
import NoPageFound from './Common/NoPageFound';
import Clock from './Common/Clock';
import LoginUser from './Login/LoginUser';
import RegisterUser from './Register/RegisterUser';

class ScreenPickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: this.props.screen
    }
    this.ShowView = this.ShowView.bind(this);
  }

  ShowView = (view) => {
    switch (view) {
      case "LoginUser":
        return <LoginUser />
      case "RegisterUser":
        return <RegisterUser />
      case "Clock":
        return <Clock />
      default:
        return <NoPageFound />
    }
  }

  render() {
    let view = this.state.screen
    return (
      <div className="main-container">
        {this.ShowView(view)}
      </div>
    );
  }
}

export default ScreenPickerComponent;