function realname(value = '') {
	if (!/[\u4e00-\u9fa5]/ig.test(value)) return false
	return true
}

const Validation = {
	realname,
}

export default Validation
