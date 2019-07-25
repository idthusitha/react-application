const LoadCountryReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCHING_COUNTRY':
            return Object.assign({}, state, {
                fetching: true,
                countryList: {}
            });

        case 'COUNTRY_RECEIVED':
            return Object.assign({}, state, {
                fetching: false,
                countryList: action.payload.data

            });

        case 'COUNTRY_FAILED':
            return Object.assign({}, state, {
                fetching: false,
                countryList: {}
            });

        default:
            return state;
    }
}
export default LoadCountryReducer;