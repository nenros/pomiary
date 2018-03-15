import React, { Component } from 'react'
import Station from "./Station";


const MeasureStationsList = ({ stations }) => {
    return <div className="columns is-multiline">{
        stations.map((station) => <Station key={station.no} station={station} />)
    }</div>
}


export default MeasureStationsList

