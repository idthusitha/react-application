import axios from 'axios';
//import { CONTROLLER_URL } from '../settings';


export const LoadCity = () => {

  //let url = CONTROLLER_URL+'loadCountryList';
  let url = "http://web.elb.prod.gateway.use1.aws.rezos.io/patuna-use1-zero/spencebeds/airport_status/Y";
  return (dispatch, getState) => {

    dispatch({ type: 'FETCHING_CITY', payload: { fetching: true, data: {} } });

    axios(encodeURI(`${url}`), {
      'headers': {
        'Content-Type': 'application/json'
        //'apiKey': getState ().apiKey.apiKey
      }
    }).then(response => {
      dispatch({ type: 'CITY_RECEIVED', payload: { fetchingData: false, data: response.data } });

    }).catch(e => {
      dispatch({ type: 'CITY_FAILED', payload: { fetchingData: false, data: e } });
    });
  }
}
