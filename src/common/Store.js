import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate, createTransform } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import { Iterable, fromJS } from 'immutable'
import reducers from '../reducers'

// reduer---log
const logger = createLogger({
	stateTransformer: (state) => {
		let newState = {}
		for (let i of Object.keys(state)) {
			if (Iterable.isIterable(state[i])) {
				newState[i] = state[i].toJS()
			} else {
				newState[i] = state[i]
			}
		}
		return newState
	},
})

// redux的中间件
const middleware = [
	thunk,
	logger,
]

// 
const Store = compose(
	applyMiddleware(...middleware),
	autoRehydrate()
)(createStore)(reducers)


const immutableTransform = createTransform(
	state => Iterable.isIterable(state) ? state.toJS() : state,
	state => JSON.stringify(state) !== '{}' ? fromJS(state) : null
)

// 
persistStore(Store, {
	// 异步保存的地方
	storage: AsyncStorage,
	// 
	transforms: [
		immutableTransform,
	],
	// 白名单
	whitelist: [],
})

export default Store
