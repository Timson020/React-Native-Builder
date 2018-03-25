// 校验中文
function china(value = '') {
	if (/^[\u4E00-\u9FA5]{0,30}$/ig.test(value)) return true
	return false
}

// 校验数字
function number(value = '') {
	if (/^[0-9]{1,}$/ig.test(value)) return true
	return false
}

// 校验中国固话
function telephone(value = '') {
	if (/^[0-9]{8}$/.test(value)) return true
	return false
}

// 校验手机号码
function phone(value = '') {
	if (/^[1][358][0-9]{9}$/ig.test(value)) return true
	return false
}

// 校验密码
function passWord(value = '') {
	if (/^[a-zA-Z0-9]{6,10}$/ig.test(value)) return true
	return false
}

// 校验验证码
function verificationCode(value = '') {
	if (/^[0-9]{6}$/ig.test(value)) return true
	return false
}

const Validation = {
	china,
	number,
	telephone,
	phone,
	passWord,
	verificationCode,
}

export default Validation
