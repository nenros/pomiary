import stations, { initialState } from "./stations";
import { FETCH_STATIONS, FETCH_STATIONS_SUCCESS, FETCH_STATIONS_ERROR } from "../contants";
import * as stationsResponse from '../__spec__/stations_response.json'

describe('Stations reducer', () => {
    it("should return initial state for undefined", () => {
        const effect = stations()
        expect(effect).toEqual(initialState)
    })

    it(`should set fetching to true for ${FETCH_STATIONS}`, () => {
        const effect = stations(initialState, { type: FETCH_STATIONS })
        expect(effect.fetching).toBeTruthy()
    })

    it(`should set stations list for ${FETCH_STATIONS_SUCCESS}`, () => {
        const payload = stationsResponse.success.data
        const effect = stations(initialState, { type: FETCH_STATIONS_SUCCESS, payload })
        expect(effect.fetching).toBeFalsy()
        expect(effect.records).toEqual(payload)
        expect(effect.error).toBeNull()
    })

    it(`should set error messafe in error for ${FETCH_STATIONS_ERROR}`, () => {
        const payload = "Error message"
        const effect = stations(initialState, { type: FETCH_STATIONS_ERROR, payload })
        expect(effect.fetching).toBeFalsy()
        expect(effect.error).toEqual(payload)
    })
});
