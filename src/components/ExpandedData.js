import React, { Component } from 'react'

class ExpandedData extends Component {
    static GET_ENDPOINT_URL = (station_id, option, date = new Date()) =>
        `measurments/${station_id}/${option}/${date.toISOString().substring(0, 10)}`

    state = {
        expand: false, measurments: null
    }

    toogleData = () => {
        const { expand, measurments } = this.state
        if (expand === false && measurments === null) {
            this.fetchData()
        }
        this.setState({ ...this.state, expand: !expand })
    }

    async fetchData() {
        try {
            const { id, option } = this.props
            const url = ExpandedData.GET_ENDPOINT_URL(id, option)
            const response = await fetch(url)
            const json = await response.json()
            if (json.status !== "success") {
                throw Error(json.message)
            }
            this.setState({ ...this.state, measurments: json.data })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return <div>
            <span onClick={() => this.toogleData()}>Pokaz więcej {this.props.option}: </span>
            {this.state.expand &&
                this.state.measurments !== null &&
                <table>
                    <thead>
                        <tr>
                            <th>Czas</th>
                            <th>Wartosc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.measurments.map((measure, i) =>
                            <tr key={i}>
                                <td>{measure[0]}</td><td>{measure[1]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>}
        </div>
    }
}

export default ExpandedData
