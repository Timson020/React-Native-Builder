import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

import { Provider } from 'react-redux'

import { Utils, Store } from './common'

import Routes from './routes'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={[styles.container]}>
				<StatusBar backgroundColor={Utils.themeColor} barStyle="light-content" />
				<Provider store={Store}>
					<Routes />
				</Provider>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
