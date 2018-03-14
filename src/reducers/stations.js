import { FETCH_STATIONS, FETCH_STATIONS_SUCCESS, FETCH_STATIONS_ERROR } from '../contants'
export const initialState = {
    error: null,
    fetching: false,
    records: []
}

const stations = (state = initialState, action = {}) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_STATIONS:
            return { ...state, fetching: true }
        case FETCH_STATIONS_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                records: payload
            }
        case FETCH_STATIONS_ERROR:
            return {
                ...state,
                fetching: false,
                error: payload
            }
        default:
            return state
    }
}

export default stations
