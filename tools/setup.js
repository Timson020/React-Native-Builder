// import
import fs from 'fs'
// import path from 'path'

// cmd arguments
const argvs = process.argv

// folder path
const root_path = __dirname.split('tools')[0]
const ios_path = `${root_path}ios`
const android_path = `${root_path}android`

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
			const curPath = `${root_path}/${file}`
			if (fs.statSync(curPath).isFile()) {
				const contents = fs.readFileSync(curPath).toString()
				const newContents = contents.replace(/Demo/g, name)
				fs.writeFileSync(curPath, newContents)
				// console.info('reWrite the ' + file)
			}
		})
	}
}

// start
async function start() {
	// del the folder
	const ios = await isPath(ios_path)
	const android = await isPath(android_path)
	const new_root_path = root_path.replace(/react-native-template-timson/ig, appName)
	// const androidStats = android.data
	// const iosStats = ios.data
	if (ios.code == 200) {
		deleteFolder(ios_path)
		console.info('\x1B[35m', '##### ios_path is success delete #####')
	}
	if (android.code == 200) {
		deleteFolder(android_path)
		console.info('\x1B[35m', '##### android_path is success delete #####')
	}

	// file rename
	rename(appName, root_path)
	console.info('\x1B[36m', '----- file rename is complete -----')

	fs.renameSync(`${root_path}`, `${new_root_path}`)

	console.info('\x1B[32m', '----- success, It is all complete -----')
	console.info('\x1B[33m', '***** please run step by step on cmd *****')
	console.info('\x1B[40m\x1B[90m%s\x1B[39m\x1B[49m', `>>>>>>> mkdir ex && cd ./ex && react-native init ${appName}`)
	console.info('\x1B[40m\x1B[90m%s\x1B[39m\x1B[49m', `>>>>>>> mv ./${appName}/ios ../ios && mv ./${appName}/android ../android && cd ../ && rm -fr ex`)
	console.info('\x1B[40m\x1B[90m%s\x1B[39m\x1B[49m', '>>>>>>> npm run new')
	console.info('\x1B[40m\x1B[90m%s\x1B[39m\x1B[49m', `!!!!! please check the ./${appName}/package.json, react && react-native version, to modify ./package.json`)
}

start()
