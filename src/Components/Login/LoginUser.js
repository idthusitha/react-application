import React, { Component } from "react";
import LoginUserComponent from './LoginUserComponent';

class LoginUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiKey: ''
    }
  }
  componentDidMount() {
    //alert("componentDidMount")	  
  }

  render() {
    return (
      <LoginUserComponent
      />
    );
  }
}

export default LoginUser;