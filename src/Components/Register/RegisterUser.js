import React, { Component } from "react";
import { connect } from 'react-redux';
import RegisterUserComponent from './RegisterUserComponent';
import { LoadCountry } from '../../redux/actions/Common/LoadCountryAction'

class RegisterUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      countryList: []
    }
  }
  componentDidMount() {
    //alert("componentDidMount")	  
    this.loadCountryList();
  }
  componentWillUnmount() {
    //alert("componentWillUnmount")
  }

  componentWillReceiveProps(nextProps) {
    //alert("componentWillReceiveProps")
    if (nextProps.countryList != null && nextProps.countryList.countryList.length > 0) {
      this.customCountryList(nextProps.countryList.countryList);
    }
  }

  customCountryList(countryList) {
    let countryListTemp = []
    for (let i = 0; i < countryList.length; i++) {
        let countryJSONTemp = countryList[i];

        let coutryJson = {}
        coutryJson['key'] = countryJSONTemp.countryid;
        coutryJson['label'] = countryJSONTemp.countryname;

        countryListTemp.push(coutryJson)
    }
    this.setState({
      countryList: countryListTemp
    })
}

  loadCountryList = () => {
    this.props.loadCountryList();
  }

  render() {
    return (
      <RegisterUserComponent
        countryList={this.state.countryList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    countryList: state.countryList
  }
}

const mapDipatchToProps = dispatch => {
  return {
    loadCountryList: () => {
      dispatch(LoadCountry());
    }
  }
}

//export default RegisterUser;
//export default connect(null, mapDipatchToProps)(RegisterUser);
export default connect(mapStateToProps, mapDipatchToProps)(RegisterUser);