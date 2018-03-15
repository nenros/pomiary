import React from 'react';
import { shallow } from 'enzyme';
import { Stations } from './Stations';

const fetchStations = jest.fn()
const records = []
const errorMessage = 'cos nie tak'
const defaultProps = {
    fetchStations,
    stations: {
        error: null,
        records
    },
    children: <div />
}
const setup = (props = defaultProps) => {
    return shallow(<Stations {...props} />)
}

describe('<Stations/> container', () => {
    afterEach(() => { fetchStations.mockClear() })

    it('should render', () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toMatchSnapshot()
    })

    it('should render children if there isn\'t error', () => {
        const enzymeWrapper = setup()
        expect(enzymeWrapper).toContainReact(<div stations={records} />)
    })

    it('should fetch stations at mount', () => {
        const enzymeWrapper = setup()
        expect(fetchStations.mock.calls).toHaveLength(1)
    })

    it('should render error', () => {
        const props = { ...defaultProps, stations: { ...defaultProps.stations, error: errorMessage } }
        const enzymeWrapper = setup(props)
        expect(enzymeWrapper.find('.message-body')).toHaveText(errorMessage)
        expect(enzymeWrapper).toMatchSnapshot()
    })

});
