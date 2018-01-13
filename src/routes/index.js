import React, { Component } from 'react'
import { Scene, Modal } from 'react-native-router-flux'

import { ReduxRouter } from '../components'

import Home from './Home'

export default class Routes extends Component {
	shouldComponentUpdate() {
		return false
	}

	render() {
		return (
			<ReduxRouter>
				<Scene key="modal" component={Modal}>
					<Scene key="root">
						<Scene key="home" title="首页" component={Home} />
					</Scene>
				</Scene>
			</ReduxRouter>
		)
	}
}
