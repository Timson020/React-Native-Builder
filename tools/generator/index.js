const fs = require('fs')

const path = require('path')

const argvs = process.argv

const type = argvs[2]
const name = argvs[3]

const reg = /Template/g
const miReg = /template/g

const _path = __dirname

const fileName = name.substr(0, 1).toUpperCase() + name.substr(1)

const options = {
	r: {
		path: _path + '/../../src/routes/',
		tempPath: _path + '/route.temp/',
		index: _path + '/../../src/routes/index.js',
	},
	c: {
		path: _path + '/../../src/components/',
		tempPath: _path + '/components.temp/',
		index: _path + '/../../src/components/index.js',
	},
}

if (!options[type]) throw new Error('type is not defined')

const tDir = options[type].tempPath
const gPath = options[type].path + fileName + '/'

// 构建器
function generate(tempDir, genPath) {
	mkdir(genPath)
	let files = fs.readdirSync(tempDir)
	files.forEach((file) => {
		let stat = fs.statSync(tempDir + file)
		if (stat.isFile()) {
			let content = fs.readFileSync(tempDir + file).toString()
			content = content.replace(reg, fileName).replace(miReg, fileName.toLowerCase())
			let suffix = file.substr(file.indexOf('.'), file.length)
			let filename
			if (reg.test(file))
				filename = fileName + suffix
			else if (miReg.test(file))
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

// 重新index文件
function writeFile(t) {
	const fileIndexPath = options[t].index
	const isFile = fs.statSync(fileIndexPath)
	if (t === 'r') {
		const indexContents = isFile ? fs.readFileSync(fileIndexPath).toString() : ''
		const c = indexContents.split('// 页面结束')
		c.splice(1, 0, 'import ' + name + ' from \'./' + name + '\'\n// 页面结束')
		fs.writeFileSync(fileIndexPath, c.join(''))
	}
	if (t === 'c') {
		const indexContents = isFile ? fs.readFileSync(fileIndexPath).toString() : ''
		let c = indexContents.split('// 组件结束')
		c.splice(1, 0, 'import ' + name + ' from \'./' + name + '\'\n// 组件结束')
		c = c.join('')
		c = c.split('}\n')
		c.splice(1, 0, '\t' + name + ',\n}\n')
		fs.writeFileSync(fileIndexPath, c.join(''))
	}
}

// 创建路径
function mkdir(dir) {
	dir = path.normalize(dir)
	console.info('make folder, path:' + dir)
	fs.existsSync(dir) || fs.mkdirSync(dir)
}

// 创建文件
function mkfile(dir, content) {
	dir = path.normalize(dir)
	console.info('make folder, path:' + dir)
	fs.writeFileSync(dir, content)
}

generate(tDir, gPath)
writeFile(type)
