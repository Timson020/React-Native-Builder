import { ActionConst } from 'react-native-router-flux'
import { fromJS } from 'immutable'

const initialState = fromJS({
	index: -1,
	name: '',
	sceneKey: '',
	title: '',
	parent: '',
})

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
	case ActionConst.FOCUS:
		return fromJS(action.scene)
	default:
		return state
	}
}
