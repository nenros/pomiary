import { SUCCESS } from "../contants";

export const measure_url = (station_id, measure, date = new Date()) =>
    `measurments/${station_id}/${measure}/${date.toISOString().substring(0, 10)}`

export const fetchMeasurment = (id, measure) => async (dispatch) => {
    const actionType = `FETCH_${measure.toUpperCase()}`
    try {
        dispatch({ type: actionType })
        const response = await fetch(measure_url(id, measure))
        if (!response.ok) {
            return dispatch({ type: `${actionType}_ERROR`, payload: response.status })
        }
        const json = await response.json()
        if (json.status !== SUCCESS) {
            return dispatch({ type: `${actionType}_ERROR`, payload: json.message })
        }
        return dispatch({ type: `${actionType}_SUCCESS`, payload: { id: id, data: json.data } })
    } catch (error) {
        dispatch({ type: `${actionType}_ERROR`, payload: error })
    }
}
