import React, { Component } from 'react'
import { Router } from 'react-native-router-flux'

import { Utils } from '../common'

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
	shouldComponentUpdate() {
		return false
	}

	componentWillUnmount() {}

	render() {
		return (
			<Router {...this.props} getSceneStyle={getSceneStyle} panHandlers={null} />
		)
	}
}

export default ReduxRouter
