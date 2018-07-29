[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Timson020/React-Native-Builder.git/pulls)

# ReactNative-Builder
> 集成 路由库-react-native-router-flux 持续化存储-redux & immutable

## 技术栈
- [X] react
- [X] react-native
- [X] redux
- [X] immutable
- [X] react-native-router-flux

## 简单的目录说明

|跟名称|子名称|说明|
|:--:|:--:|:--:|
|src||源码文件|
||assets|图片|
||ccommon|工具库|
||components|项目全局组件|
||reducers|reducers|
||routes|页面|
|tools||命令工具库|
|.eslintrc||eslint 规范|
|.eslintrc||babel 解析器|

## 命令
```
	npm start --- 开启服务
	npm run test --- 开启测试
	npm run r Home --- 构建器，一行命令，自动构建页面模版
	npm run c Component --- 构建器，一行命令，自动构建组件模版
	npm run setup AppName --- 初始化命令
	npm run new --- 保持最新的react && react-native
	npm run iosBundle --- ios生成bundle
	npm run androidBundle --- android生成bundle
	npm run androidBuild --- android打包
```

## Useage

```
	npm i babel-cli -g

	git clone https://github.com/Timson020/React-Native-Builder.git

	cd ./React-Native-Builder
	
	npm run setup AppName
```

>please check the ./ex/AppName/package.json, react && react-native version, to modify ./package.json

## Android-Step-Once

### 生成签名：

- 输入命令
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

- my-release-key.keystore文件放到你工程中的android/app文件夹下 

### 一次性修改：

- / android /gradle.properties，添加如下的代码（注意：请把其中的****替代为替换的keystore密码）
```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore

MYAPP_RELEASE_KEY_ALIAS=my-key-alias

MYAPP_RELEASE_STORE_PASSWORD=*****

MYAPP_RELEASE_KEY_PASSWORD=*****
```

- 编辑你工程目录下的android/app/build.gradle
```
...
android {
	...
	defaultConfig { ... }
	<!-- 拷贝： -->
	signingConfigs {
		release {
			storeFile file(MYAPP_RELEASE_STORE_FILE)
			storePassword MYAPP_RELEASE_STORE_PASSWORD
			keyAlias MYAPP_RELEASE_KEY_ALIAS
			keyPassword MYAPP_RELEASE_KEY_PASSWORD
		}
	}
	buildTypes {
		release {
			...
			<!-- 拷贝： -->
			signingConfig signingConfigs.release
		}
	}
}
...
```
