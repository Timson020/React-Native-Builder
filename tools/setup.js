// import
import fs from 'fs'
// import path from 'path'

// cmd arguments
const argvs = process.argv

// folder path
const root_path = __dirname.split('tools')[0]
const ios_path = `${root_path}ios_back`
const android_path = `${root_path}android_back`

// file path
// const indexJS = `${root_path}index.js`
// const packageJSON = `${root_path}package.json`
// const MD = `${root_path}README.md`

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

// function for rename the app
function rename(name, path) {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach((file) => {
			console.info(file)
		})
	}
}

// start
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

	rename(appName, root_path)
}

start()
