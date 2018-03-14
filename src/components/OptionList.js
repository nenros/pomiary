import React from 'react'
import ActivityIcon from './ActivityIcon'

const OptionList = ({ options = [], object = {} }) => {
    return <ul>
        {options.map((option) => <li key={option}>{option}: <ActivityIcon active={object[option]} /></li>)}
    </ul>
}

export default OptionList
