import axios from 'axios';
//import { CONTROLLER_URL } from '../settings';


export const LoadCountry = () => {

  //let url = CONTROLLER_URL+'loadCountryList';
  let url = "http://web.elb.prod.gateway.use1.aws.rezos.io/patuna-use1-zero/spencebeds/country_status/Y";
  return (dispatch, getState) => {

    dispatch({ type: 'FETCHING_COUNTRY', payload: { fetching: true, data: {} } });

    axios(encodeURI(`${url}`), {
      'headers': {
        'Content-Type': 'application/json'
        //'apiKey': getState ().apiKey.apiKey
      }
    }).then(response => {
      dispatch({ type: 'COUNTRY_RECEIVED', payload: { fetchingData: false, data: response.data } });

    }).catch(e => {
      dispatch({ type: 'COUNTRY_FAILED', payload: { fetchingData: false, data: e } });
    });
  }
}
