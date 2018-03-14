import { fetchStations, STATIONS_PATH } from "./stations";
import { initialState } from '../reducers/stations'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import { FETCH_STATIONS_SUCCESS, FETCH_STATIONS, FETCH_STATIONS_ERROR } from "../contants";
import * as stationsResponse from '../__spec__/stations_response.json'

const mockStore = configureMockStore([thunk]);

describe('Stations actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })
    describe('Fetch stations', () => {
        it(`should fetch stations and dispatch ${FETCH_STATIONS_SUCCESS}`, async () => {
            const mock = fetchMock.get(STATIONS_PATH, stationsResponse.success)
            const store = mockStore(initialState)
            await store.dispatch(fetchStations())
            const actions = store.getActions()
            expect(actions[0].type).toBe(FETCH_STATIONS)
            expect(actions[1].type).toBe(FETCH_STATIONS_SUCCESS)
            expect(actions[1].payload).toEqual(stationsResponse.success.data)
        })

        it(`should fetch stations and dispatch ${FETCH_STATIONS_ERROR} for non success response`, async () => {
            const mock = fetchMock.get(STATIONS_PATH, stationsResponse.error)
            const store = mockStore(initialState)
            await store.dispatch(fetchStations())
            const actions = store.getActions()
            expect(actions[0].type).toBe(FETCH_STATIONS)
            expect(actions[1].type).toBe(FETCH_STATIONS_ERROR)
            expect(actions[1].payload).toEqual(stationsResponse.error.message)
        })

        it(`should fetch stations and dispatch ${FETCH_STATIONS_ERROR} for non 200 status`, async () => {
            const errorCode = 404
            const mock = fetchMock.get(STATIONS_PATH, errorCode)
            const store = mockStore(initialState)
            await store.dispatch(fetchStations())
            const actions = store.getActions()
            expect(actions[0].type).toBe(FETCH_STATIONS)
            expect(actions[1].type).toBe(FETCH_STATIONS_ERROR)
            expect(actions[1].payload).toEqual(errorCode)
        })
    });
});
