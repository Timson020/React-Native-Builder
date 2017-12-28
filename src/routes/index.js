import React, { Component } from 'react'
// import { StyleSheet } from 'react-native'
import { Scene, Modal } from 'react-native-router-flux'

import { ReduxRouter } from '../components'
// import { Utils } from '../common'

export default class Routes extends Component {
	shouldComponentUpdate() {
		return false
	}

	render() {
		return (
			<ReduxRouter>
				<Scene key="modal" component={Modal}>
					<Scene key="root" />
				</Scene>
			</ReduxRouter>
		)
	}
}

// let styles = StyleSheet.create({})
