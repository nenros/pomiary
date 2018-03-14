import { FETCH_STATIONS, FETCH_STATIONS_ERROR, SUCCESS, FETCH_STATIONS_SUCCESS } from "../contants";

export const STATIONS_PATH = '/stations'

export const fetchStations = () => async (dispatch) => {
    dispatch({ type: FETCH_STATIONS })
    try {
        const response = await fetch(STATIONS_PATH)
        if (!response.ok) {
            return dispatch({ type: FETCH_STATIONS_ERROR, payload: response.status })
        }
        const json = await response.json()
        if (json.status !== SUCCESS) {
            return dispatch({ type: FETCH_STATIONS_ERROR, payload: json.message })
        }
        return dispatch({ type: FETCH_STATIONS_SUCCESS, payload: json.data })
    } catch (error) {
        return dispatch({ type: FETCH_STATIONS_ERROR, payload: error })
    }
}
