import React, { Component } from 'react'
import { AppState } from 'react-native'
import { Router, Actions, ActionConst } from 'react-native-router-flux'

import { Utils } from '../common'

let startTime = new Date()
let endTime = new Date()
const stopTime = 5

const getSceneStyle = (props, computedProps) => {
	const style = {
		flex: 1,
		backgroundColor: '#fff',
		shadowColor: null,
		shadowOffset: null,
		shadowOpacity: null,
		shadowRadius: null,
	}
	if (computedProps.isActive) {
		style.marginTop = computedProps.hideNavBar ? 0 : Utils.OS === 'ios' ? 64 : 54
		style.marginBottom = computedProps.hideTabBar ? 0 : 50
	}
	return style
}


class ReduxRouter extends Component {
	componentWillMount() {
		AppState.addEventListener('change', this._handleAppStateChange.bind(this))
	}

	render() {
		return (
			<Router
				{...this.props}
				hideTabBar
				getSceneStyle={getSceneStyle}
				backAndroidHandler={this._backAndroidHandler.bind(this)}
			/>
		)
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this._handleAppStateChange.bind(this))
	}

	shouldComponentUpdate() {
		return false
	}

	_handleAppStateChange(currentAppState) {
		// if (currentAppState === 'background') {
		// 	startTime = new Date().getTime()
		// }
		// if (currentAppState === 'active') {
		// 	endTime = new Date().getTime()
		// 	if ((endTime - startTime) > stopTime * 1000 && this.props.pwd) {
		// 		Actions.lock({ type: ActionConst.PUSH, operate: 'lock' })
		// 	}
		// }
	}

	_backAndroidHandler() {
		// let { route } = this.props
		// // 不允许pop的页面的key
		// if (route.sceneKey !== 'home' || route.sceneKey !== 'guidePage' || route.sceneKey !== 'applicationFinish' || route.sceneKey !== 'lock') {
		// 	Actions.pop()
		// }
		// // // 退出app
		// if (route.sceneKey === 'home') {
		// 	return false
		// }
		// // 禁止默认事件---退出app
		// return true
	}
}

export default ReduxRouter
