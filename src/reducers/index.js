import { combineReducers } from 'redux';
import stations from './stations'
import rain from './rain'
import water from './water'
import winddir from './winddir'
import windlevel from './windlevel'

export default combineReducers({ stations, rain, water, winddir, windlevel })
