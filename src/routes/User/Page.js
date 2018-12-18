import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Utils, Constants } from '../../common'
import { BaseComponent } from '../../components'

import { } from './module'
import { } from './components'

class User extends BaseComponent {
	static navigationOptions = ({ navigation }) => {
		return {
			title: '个人中心',
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerBackTitle: null,
			headerLeft: <TouchableOpacity style={{ marginLeft: Utils.fontRem * 8 }} onPress={() => {}}><Text style={styles.headerText}>设置</Text></TouchableOpacity>,
		}
	};

	static propTypes = {};

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { navigation } = this.props
		return (
			<SafeAreaView style={styles.container}>
				<Text style={{ fontSize: Utils.fontRem * 16, color: Constants.themeColor }}>thanks for you use</Text>
				<TouchableOpacity style={{ marginTop: Utils.fontRem * 20 }} onPress={() => navigation.push('Setting', { })}>
					<Text style={{ fontSize: Utils.fontRem * 16, color: 'white' }}>goto setting Screen</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginTop: Utils.fontRem * 20 }} onPress={() => navigation.push('LogIn', { })}>
					<Text style={{ fontSize: Utils.fontRem * 16, color: 'white' }}>goto login Screen</Text>
				</TouchableOpacity>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	},
	headerText: {
		fontSize: 14,
		color: 'white',
	},
})

export default connect(state => ({
	user: state.User.toJSON(),
}))(User)
