import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Scene, Modal } from 'react-native-router-flux'

import { ReduxRouter, TabIcon, NavBar } from '../components'
// import { Utils } from '../common'

import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Setting from './Setting'
import StoreManager from './StoreManager'
import OrderManager from './OrderManager'

export default class Routes extends Component {
	shouldComponentUpdate() {
		return false
	}

	render() {
		return (
			<ReduxRouter>
				<Scene key="modal" component={Modal}>
					<Scene key="root">
						<Scene key="signIn" title="注册" component={SignIn} />
						<Scene key="signUp" title="登录" component={SignUp} />
						<Scene key="tabBar" initial={true}>
							<Scene key="main" tabs={true} tabBarStyle={[styles.tabBarStyle]} tabBarSelectedItemStyle={[styles.tabBarSelectedItemStyle]}>
								<Scene key="tab1" title="首页" navBar={NavBar} iconName="ios-home" iconSize={30} iconColor="gray" iconSelectColor="blue" icon={TabIcon}>
									<Scene key="home" title="首页" hideTabBar={false} component={Home} />
								</Scene>
								<Scene key="tab2" title="订单管理" navBar={NavBar} iconName="ios-list-box" iconSize={30} iconColor="gray" iconSelectColor="blue" icon={TabIcon}>
									<Scene key="orderManager" title="订单管理" hideTabBar={false} component={OrderManager} />
								</Scene>
								<Scene key="tab3" title="门店管理" navBar={NavBar} iconName="ios-keypad" iconSize={30} iconColor="gray" iconSelectColor="blue" icon={TabIcon}>
									<Scene key="storeManager" title="门店管理" hideTabBar={false} component={StoreManager} />
								</Scene>
								<Scene key="tab4" title="设置" navBar={NavBar} iconName="ios-settings" iconSize={30} iconColor="gray" iconSelectColor="blue" icon={TabIcon}>
									<Scene key="setting" title="设置" hideTabBar={false} component={Setting} />
								</Scene>
							</Scene>
						</Scene>
					</Scene>
				</Scene>
			</ReduxRouter>
		)
	}
}

let styles = StyleSheet.create({
	tabBarStyle: {
		borderColor: 'gray',
		borderStyle: 'solid',
		borderTopWidth: 1,
		backgroundColor: 'white',
	},
	tabBarSelectedItemStyle: {},
	navigationBarStyle: {
		// backgroundColor: 'linear-gradient(top, #ccc, #000)'
	}
})
