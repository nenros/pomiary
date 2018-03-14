import React from 'react';
import { shallow } from 'enzyme';
import MeasureStationsList from './MeasureStationsList'
import Station from './Station'
import fetchMock from 'fetch-mock'

import * as stationsResponse from './__spec__/stations_response.json'

const defaultProps = {}


const setup = (props = defaultProps) => {
    return shallow(<MeasureStationsList {...props} />)
}

describe("MeasureStationsList", () => {
    it("should render", (done) => {
        const mock = fetchMock.get(MeasureStationsList.API_ENDPOINT, stationsResponse.success)
        const enzymeWrapper = setup()
        setImmediate(() => {
            enzymeWrapper.update()
            expect(enzymeWrapper.find("Station")).toHaveLength(1)
            expect(enzymeWrapper).toMatchSnapshot()
            fetchMock.restore()
            done()
        })
    })

    it("should render station", (done) => {
        const { data } = stationsResponse.success
        const mock = fetchMock.get(MeasureStationsList.API_ENDPOINT, stationsResponse.success)
        const enzymeWrapper = setup()
        setImmediate(() => {
            enzymeWrapper.update()
            expect(enzymeWrapper).toContainReact(<Station station={data[0]} />)
            fetchMock.restore()
            done()
        })
    })
})
