import { fromJS } from 'immutable'
import * as ActionTypes from '../common/ActionTypes'

const initialState = fromJS({
	realname: null,
	phone: null,
	idcard: null,
	sex: null,
	device_id: null,
	pwd: null,
})

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {

	case ActionTypes.RESET_ALL_STATE: {
		return initialState
	}
	default:
		return state
	}
}