import React, { Component } from 'react'

class ExpandedData extends Component {

    state = {
        expand: false
    }

    toogleData = () => {
        this.setState({ ...this.state, expand: !this.state.expand })
    }

    render() {
        const measurments = []
        return <div>
            <span onClick={() => this.toogleData()}>Pokaz więcej {this.props.option}: </span>
            {this.state.expand &&
                <table>
                    <thead>
                        <tr>
                            <th>Czas</th>
                            <th>Wartosc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {measurments.map((measure, i) =>
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
