import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

import { Provider } from 'react-redux'

import { Store } from './common'

import Routes from './routes'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	shouldComponentUpdate() {
		return false
	}

	render() {
		return (
			<View style={[styles.container]}>
				<StatusBar barStyle="light-content" />
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
