import { combineReducers } from 'redux'
import User from './User'
import Route from './Router'
import Setting from './Setting'

module.exports = combineReducers({
	User,
	Route,
	Setting,
})
