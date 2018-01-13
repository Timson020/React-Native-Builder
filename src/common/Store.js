import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createTransform, persistStore, persistReducer } from 'redux-persist'
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

// immutable 转换
const immutableTransform = createTransform(
	(state) => { return Iterable.isIterable(state) ? state.toJS() : state },
	(state) => { return JSON.stringify(state) !== '{}' ? fromJS(state) : null }
)

// 持久化reducer
const reducer = persistReducer({
	key: 'root',
	// 版本
	version: 1,
	// 白名单
	whitelist: ['User'],
	// 异步保存的地方
	storage: AsyncStorage,
	// 转换
	transforms: [immutableTransform],

	throttle: 1000,

	debug: true,
}, reducers)

// Store导出
const Store = compose(applyMiddleware(...middleware))(createStore)(reducer)

persistStore(Store)

export default Store
