import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Utils, Constants } from '../../common'
import { BaseComponent } from '../../components'

import { openDrawer } from './module'
import { } from './components'

class Home extends BaseComponent {
	static navigationOptions = ({ navigation }) => {
		return {
			title: '首页',
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerBackTitle: null,
			headerRight: <TouchableOpacity style={{ marginRight: Utils.fontRem * 8 }} onPress={() => {}}><Text style={styles.headerText}>完成</Text></TouchableOpacity>,
			headerLeft: <TouchableOpacity style={{ marginLeft: Utils.fontRem * 8 }} onPress={() => {}}><Text style={styles.headerText}>打开抽屉</Text></TouchableOpacity>,
		}
	};

	static propTypes = {};

	constructor(props) {
		super(props)
		this.state = {}

		this._openDrawer = openDrawer.bind(this)
	}

	render() {
		const { navigation } = this.props
		
		return (
			<SafeAreaView style={styles.container}>
				<Text style={{ fontSize: Utils.fontRem * 16, color: Constants.themeColor }}>welcome to react-native</Text>
				<TouchableOpacity style={{ marginTop: Utils.fontRem * 20 }} onPress={() => navigation.push('Shop', { })}>
					<Text style={{ fontSize: Utils.fontRem * 16, color: 'white' }}>next Screen</Text>
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
}))(Home)
