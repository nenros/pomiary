import React, { Component } from 'react'
import Station from "./Station";

class MeasureStationsList extends Component {
    static API_ENDPOINT = '/stations'

    state = {
        stations: []
    }

    async componentDidMount() {
        await this.fetchStations()
    }

    async fetchStations() {
        try {
            const response = await fetch(MeasureStationsList.API_ENDPOINT)
            const body = await response.json()
            if (body.status !== "success") {
                throw new Error(body.message)
            }
            return this.setState({ ...this.state, stations: body.data })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { stations } = this.state
        return <div className="columns is-multiline">{
            stations.map((station) => <Station key={station.no} station={station} />)
        }</div>
    }
}

export default MeasureStationsList
