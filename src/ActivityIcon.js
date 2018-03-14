import React from 'react'

const ActivityIcon = ({ active }) => <span className={`icon has-text-${active ? 'success' : 'danger'}`}>
    <i className={`fas fa-${active ? 'check-square' : 'ban'}`} />
</span>

export default ActivityIcon
