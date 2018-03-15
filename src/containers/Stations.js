import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStations } from '../actions/stations'

export class Stations extends Component {

    componentDidMount() {
        this.props.fetchStations()
    }

    render() {
        const { children } = this.props
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
        return React.cloneElement(children, { stations: records })
    }
}

export default connect(
    state => ({ stations: state.stations }),
    (dispatch) => ({ fetchStations: () => dispatch(fetchStations()) })
)(Stations)
