import { Component } from 'react'

class BaseComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	loadding() {
		
	}

	stoping() {
		alert('stop')
	}

	fetch() {
		alert('fetch')
	}
}

export default BaseComponent
