import React from "react";
import OptionList from './OptionList'
import ActivityIcon from './ActivityIcon'
import ExpandedData from './ExpandedData.js'
import Card from './hoc/Card'
import Tabs from './hoc/Tabs'

const Station = ({ station }, { measureNameToOption }) => {
    const { name, active, no } = station
    const options = ['rain', 'water', 'winddir', 'windlevel']
    return <div className="column is-half">
        <Card>
            <p>
                <strong>{name}</strong>
                <ActivityIcon active={active} />
            </p>
            <section>
                <Tabs>
                    <span>Opcje</span>
                    <OptionList object={station} options={options} />
                    {options.map((option) =>
                        <React.Fragment key={`${no}_${option}`}>
                            <span>{option}</span>
                            <ExpandedData id={no} option={option} />
                        </React.Fragment>)}
                </Tabs>
            </section>
        </Card>
    </div>
}

export default Station
