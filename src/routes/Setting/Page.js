import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Utils } from '../../common'
import { BaseComponent } from '../../components'

import { } from './module'
import { } from './components'

class Setting extends BaseComponent {
	static navigationOptions = ({ navigation }) => {
		return {
			title: '设置',
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerBackTitle: null,
			headerLeft: <TouchableOpacity style={{ marginLeft: Utils.fontRem * 8 }} onPress={() => navigation.pop()}><Text style={styles.headerText}>返回</Text></TouchableOpacity>,
		}
	};

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<SafeAreaView style={styles.container} />
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default connect(state => ({
	user: state.User.toJSON(),
}))(Setting)
