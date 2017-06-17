import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import PropTypes from 'prop-types'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={[styles.container]}>
				<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
					<Text style={[styles.navBarText]}>
						{this.props.title}
					</Text>
				</LinearGradient>
			</View>
		)
	}
}

NavBar.propTypes = {
	title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '8%',
	},
	linearGradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 14,
	},
	navBarText: {
		fontSize: 20,
		color: 'white',
	}
})