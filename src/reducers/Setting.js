import { fromJS } from 'immutable'
import * as ActionTypes from '../common/ActionTypes'

const initialState = fromJS({
	version: '1.0.0',
	token: '',
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
