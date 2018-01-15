import React, { Component } from 'react'
import { Scene, Modal } from 'react-native-router-flux'

import { ReduxRouter } from '../components'

// 页面开始
import Home from './Home'
// 页面结束

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
