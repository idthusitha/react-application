import { combineReducers } from 'redux';
import LoadCountryReducer from './Common/LoadCountryReducer';
import LoadCityReducer from './Common/LoadCityReducer';

export default combineReducers(
  // This would produce the following state object
  {
    countryList: LoadCountryReducer,
    cityList: LoadCityReducer

  });