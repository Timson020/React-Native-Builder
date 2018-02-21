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

// function for check the path
async function isPath(path) {
	return new Promise((res) => {
		fs.lstat(path, (err, d) => {
			if (err && err.errno === -2) return res({ code: 400, data: false, msg: 'no such file or directory' })
			res({ code: 200, data: d })
		})
	})
}

// function for del the folder
function deleteFolder(path) {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach((file) => {
			const curPath = `${path}/${file}`
			if (fs.statSync(curPath).isDirectory()) { // recurse
				deleteFolder(curPath)
			} else { // delete file
				fs.unlinkSync(curPath)
			}
		})
		fs.rmdirSync(path)
	}
}

// 开始
async function start() {
	// del the folder
	const ios = await isPath(ios_path)
	const android = await isPath(android_path)
	// const androidStats = android.data
	// const iosStats = ios.data
	if (ios.code == 200) {
		deleteFolder(ios_path)
		console.info('ios_path is success delete')
	}
	if (android.code == 200) {
		deleteFolder(android_path)
		console.info('android_path is success delete')
	}
	console.info(appName)
}

start()
