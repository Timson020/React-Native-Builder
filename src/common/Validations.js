// 中文
function china(value = '') {
	if (/[\u4e00-\u9fa5]/ig.test(value)) return true
	return false
}

const Validation = {
	china,
}

export default Validation
