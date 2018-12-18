import React from 'react'
// import React, { Component } from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import { IconTabHome, IconTabUser } from '../assets'
// import { Constants } from '../common'

// 页面开始
// 首页
import Home from './Home'
// 登录页
import LogIn from './LogIn'
// 个人首页
import User from './User'
// 抽屉柜
import Drawer from './Drawer'
// 设置页面
import Setting from './Setting'
// 商城
import Shop from './Shop'
// 页面结束

// 首页逻辑路由栈
const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
	},
	Shop: {
		screen: Shop,
	},
}, {
	headerMode: 'float',
	navigationOptions: ({ navigation }) => ({ tabBarVisible: navigation.state.index > 0 ? false : true }),
})

// 用户逻辑路由栈
const UserStack = createStackNavigator({
	User,
	Setting,
	LogIn,
}, {
	headerMode: 'float',
	navigationOptions: ({ navigation }) => ({ tabBarVisible: navigation.state.index > 0 ? false : true }),
})

// tabBar
const TabNavigator = createBottomTabNavigator({
	Home: HomeStack,
	User: UserStack,
}, {
	// navigationOptions: ({ navigation }) => {
	// 	// do something
	// },
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ tintColor }) => {
			const { routeName } = navigation.state
			if (routeName == 'Home') return <Image source={IconTabHome} style={{ width: 25, height: 25, tintColor }} />
			if (routeName == 'User') return <Image source={IconTabUser} style={{ width: 25, height: 25, tintColor }} />
		},
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	}),
})

export default createAppContainer(TabNavigator)
