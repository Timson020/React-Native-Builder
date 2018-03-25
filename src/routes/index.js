import React, { Component } from 'react'
import { Scene, Modal } from 'react-native-router-flux'

import { ReduxRouter } from '../components'
import { Constants } from '../common'

// 页面开始
import Home from './Home'
// 页面结束

export default class Routes extends Component {
	shouldComponentUpdate() {
		return false
	}

	render() {
		const hideBack = { hideBackImage: true, onBack: () => { } }
		const normalNav = { navigationBarStyle: { backgroundColor: Constants.themeColor, borderBottomWidth: 0, elevation: 0 }, titleStyle: { color: '#fff' } }

		return (
			<ReduxRouter>
				<Scene key="modal" component={Modal}>
					<Scene key="root" hideTabBar={true} {...hideBack} {...normalNav}>
						<Scene key="home" title="首页" component={Home} />
					</Scene>
				</Scene>
			</ReduxRouter>
		)
	}
}
