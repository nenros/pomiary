import React from 'react';
import { shallow } from 'enzyme';
import { MeasureStationsList } from './MeasureStationsList'
import Station from './Station'

import * as stationsResponse from '../__spec__/stations_response.json'

const defaultProps = {
    fetchStations: jest.fn(),
    stations: {
        error: null,
        records: stationsResponse.success.data
    }
}


const setup = (props = defaultProps) => {
    return shallow(<MeasureStationsList {...props} />)
}

describe("MeasureStationsList", () => {
    it("should render list", () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper.find("Station")).toHaveLength(1)
        expect(enzymeWrapper).toMatchSnapshot()
    })

    it("should render station", () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toContainReact(<Station station={defaultProps.stations.records[0]} />)
    })

    it("should render station", () => {
        const error = "error message"
        const props = { ...defaultProps, stations: { ...defaultProps.stations, error } }
        const enzymeWrapper = setup(props)
        expect(enzymeWrapper.find('.message-body')).toHaveText(error)
    })
})
