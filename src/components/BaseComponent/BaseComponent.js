import { Component } from 'react'
import { Actions } from 'react-native-router-flux'

class BaseComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	loadding() {
		console.info(Actions)
	}

	stoping() {
		alert('stop')
	}

	fetch() {
		alert('fetch')
	}
}

export default BaseComponent
