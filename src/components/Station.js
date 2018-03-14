import React from "react";
import OptionList from './OptionList'
import ActivityIcon from './ActivityIcon'
import ExpandedData from './ExpandedData.js'

const Station = ({ station }) => {
    const { name, active, no } = station
    const options = ['rain', 'water', 'winddir', 'windlevel']
    return <div className="column is-half">
        <div className="box">
            <div className="content">
                <div>
                    <strong>{name}</strong>
                    <ActivityIcon active={active} />
                    <br />
                    Opcje:
                    <OptionList object={station} options={options} />
                    {options.map((option) => <ExpandedData key={`${no}_${option}`} id={no} option={option} />)}
                </div>
            </div>
        </div>
    </div>
}

export default Station
