// import
import fs from 'fs'
// import path from 'path'

// cmd arguments
const argvs = process.argv

// file path
const _path = __dirname.split('tools')[0]
const ios_path = `${_path}ios`
const android_path = `${_path}android`

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
	const androidStats = android.data
	const iosStats = ios.data
	if (ios.code == 200) {
		console.info(iosStats.isDirectory())
	}
	if (androidStats.code == 200) {
		console.info(androidStats.isDirectory())
	}
}

start()
