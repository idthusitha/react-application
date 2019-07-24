import React, { Component } from "react";
import RegisterUserComponent from './RegisterUserComponent';

class RegisterUser extends Component {

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
      <RegisterUserComponent
      />
    );
  }
}

export default RegisterUser;