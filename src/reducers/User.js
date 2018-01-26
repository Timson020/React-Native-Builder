import { fromJS } from 'immutable'
import * as ActionTypes from '../common/ActionTypes'

const initialState = fromJS({
	id: '',
	realname: '',
	phone: '',
	idcard: '',
	sex: '',
	device_id: '',
	pwd: '',
})

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
	case ActionTypes.RESET_ALL_STATE: {
		return initialState
	}
	case ActionTypes.MERGEUSER: {
		return state.merge(state, action.data)
	}
	default:
		return state
	}
}
