const fs = require('fs')

const path = require('path')

const argvs = process.argv

const type = argvs[2]
const name = argvs[3]

const _path = __dirname

const fileName = name.substr(0, 1).toUpperCase() + name.substr(1)

const options = {
	r: {
		path: _path + '/../../src/routes/',
		tempPath: _path + '/route.temp/',
	},
	c: {
		path: _path + '/../../src/components/',
		tempPath: _path + '/components.temp/',
	},
}

if (!options[type]) throw new Error('type is not defined')

let tDir = options[type].tempPath
let gPath = options[type].path + fileName + '/'

generate(tDir, gPath)

function generate(tempDir, genPath) {
	mkdir(genPath)
	let files = fs.readdirSync(tempDir)
	files.forEach((file) => {
		let stat = fs.statSync(tempDir + file)
		if (stat.isFile()) {
			let content = fs.readFileSync(tempDir + file).toString()
			content = content.replace(/Template/g, fileName).replace(/template/g, fileName.toLowerCase())
			let suffix = file.substr(file.indexOf('.'), file.length)
			let filename
			if (/Template/.test(file))
				filename = fileName + suffix
			else if (/template/.test(file))
				filename = fileName.toLowerCase() + suffix
			else
				filename = file
			mkfile(genPath + filename, content)
		} else if (stat.isDirectory()) {
			let dir = genPath + file + '/'
			mkdir(dir)
			generate(tempDir + file + '/', dir)
		}
	})
}

function mkdir(dir) {
	dir = path.normalize(dir)
	console.info('make folder, path:' + dir)
	fs.existsSync(dir) || fs.mkdirSync(dir)
}

function mkfile(dir, content) {
	dir = path.normalize(dir)
	console.info('make folder, path:' + dir)
	fs.writeFileSync(dir, content)
}

