// import
import fs from 'fs'
// import path from 'path'

// cmd arguments
const argvs = process.argv

// file path
const _path = __dirname.split('tools')[0]
const ios_path = `${_path}ios_back`
const android_path = `${_path}android_back`

const appName = argvs[2]

// 返回Stats对象
async function isPath(path) {
	return new Promise((res) => {
		fs.lstat(path, (err, d) => {
			if (err && err.errno === -2) return res({ code: 400, data: false, msg: 'no such file or directory' })
			res({ code: 200, data: d })
		})
	})
}

// 开始
async function start() {
	const ios = await isPath(ios_path)
	const android = await isPath(android_path)
	// const androidStats = android.data
	// const iosStats = ios.data
	if (ios.code == 200) {
		console.info('ios')
		fs.unlinkSync(ios_path)
		console.info('ios_path is success delete')
	}
	if (android.code == 200) {
		console.info('android')
		fs.unlinkSync(android_path)

		console.info('android_path is success delete')
	}
}

start()
