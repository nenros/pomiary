import React, { Component } from 'react'
import Station from "./Station";
import { fetchStations } from '../actions/stations'
import { connect } from 'react-redux'


export class MeasureStationsList extends Component {

    componentDidMount() {
        this.props.fetchStations()
    }

    render() {
        const { records, error } = this.props.stations
        if (error) {
            return <section className="message is-danger">
                <div className="message-header">
                    <p>Error</p>
                </div>
                <div className="message-body">
                    {error}
                </div>
            </section>
        }
        return <div className="columns is-multiline">{
            records.map((station) => <Station key={station.no} station={station} />)
        }</div>
    }
}

export default connect(
    state => ({ stations: state.stations }),
    (dispatch) => ({ fetchStations: () => dispatch(fetchStations()) })
)(MeasureStationsList)

