import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Utils } from '../../common'
import { BaseComponent } from '../../components'

import { } from './module'
import { } from './components'

class Home extends BaseComponent {
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
	container: {
		flex: 1,
	},
})

Home.propTypes = {

}

export default connect(state => ({
	user: state.User.toJSON(),
}))(Home)
