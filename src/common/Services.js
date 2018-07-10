// 测试环境
const host = 'xxx.xxx.xxx.xxx:3000/app'

const commonInfix = '/common/'
const userInfix = '/user/'

const Services = {
	request1: `${host}${userInfix}request1`,
	request2: `${host}${commonInfix}request2`,
}

export default Services
