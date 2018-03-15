import React, { Component } from 'react'

class ExpandedData extends Component {


    render() {
        const measurments = []
        return <div>
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
            </table>
        </div>
    }
}

export default ExpandedData
