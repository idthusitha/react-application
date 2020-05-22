import React, { Component } from "react";
import { connect } from 'react-redux';
import RegisterUserComponent from './RegisterUserComponent';
import { LoadCountry } from '../../redux/actions/Common/LoadCountryAction'
import { LoadCity } from '../../redux/actions/Common/LoadCityAction'

class RegisterUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      countryList: [],
      cityList: []
    }
  }
  componentDidMount() {
    //alert("componentDidMount")	  
    this.loadCountryList();
    this.loadCityList();
  }
  componentWillUnmount() {
    //alert("componentWillUnmount")
  }

  componentWillReceiveProps(nextProps) {
    //alert("componentWillReceiveProps")
    if (nextProps.countryList != null && nextProps.countryList.countryList.length > 0) {
      this.customCountryList(nextProps.countryList.countryList);
    }
    if (nextProps.cityList != null && nextProps.cityList.cityList.length > 0) {
      this.customCityList(nextProps.cityList.cityList);
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


customCityList(cityList) {
  let cityListTemp = []
  for (let i = 0; i < cityList.length; i++) {
      let countryJSONTemp = cityList[i];

      let coutryJson = {}
      coutryJson['key'] = countryJSONTemp.airportid;
      coutryJson['label'] = countryJSONTemp.airportname;

      cityListTemp.push(coutryJson)
  }
  this.setState({
    cityList: cityListTemp
  })
}

  loadCountryList = () => {
    this.props.loadCountryList();
  }

  loadCityList = () => {
    this.props.loadCityList();
  }

  render() {
    return (
      <RegisterUserComponent
        countryList={this.state.countryList}
        cityList={this.state.cityList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    countryList: state.countryList,
    cityList: state.cityList
  }
}

// const mapDipatchToProps = dispatch => {
//   return {
//     loadCountryList: () => {
//       dispatch(LoadCountry());      
//     },
//     loadCityList: () => {
//       dispatch(LoadCity());      
//     }
//   }
// }
const mapDipatchToProps = (dispatch) => ({
  loadCountryList: () => dispatch(LoadCountry()),
  loadCityList: () => dispatch(LoadCity())

});


//export default RegisterUser;
//export default connect(null, mapDipatchToProps)(RegisterUser);
export default connect(mapStateToProps, mapDipatchToProps)(RegisterUser);