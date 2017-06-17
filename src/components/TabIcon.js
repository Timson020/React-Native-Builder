import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

export default class TabIcon extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={[styles.container]}>
				<Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.selected ? this.props.iconSelectColor : this.props.iconColor}/>
				<Text style={[styles.TabText,{color: this.props.selected ? this.props.iconSelectColor : this.props.iconColor}]}>{this.props.title}</Text>
			</View>
		)
	}
}

TabIcon.propTypes = {
	iconName: PropTypes.string.isRequired,
	iconSize: PropTypes.number.isRequired,
	iconColor: PropTypes.string.isRequired,
	iconSelectColor: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	selected: PropTypes.bool,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	TabText: {
		fontSize: 13
	}
})