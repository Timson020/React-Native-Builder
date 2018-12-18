import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

import { Utils } from '../../common'

class Template extends Component {
	static propTypes = {};

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container} />
		)
	}
}

const styles = StyleSheet.create({
	container: {},
})

export default Template
