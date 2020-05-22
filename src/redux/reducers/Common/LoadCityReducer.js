const LoadCityReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCHING_CITY':
            return Object.assign({}, state, {
                fetching: true,
                cityList: {}
            });

        case 'CITY_RECEIVED':
            return Object.assign({}, state, {
                fetching: false,
                cityList: action.payload.data

            });

        case 'CITY_FAILED':
            return Object.assign({}, state, {
                fetching: false,
                cityList: {}
            });

        default:
            return state;
    }
}
export default LoadCityReducer;