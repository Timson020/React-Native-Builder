# App-Template-Of-ReactNative

## 说明
react-native开发模版
> 集成 路由库-react-native-router-flux 图标库-react-native-vector-icons 持续化存储-redux & immutable

## 技术栈
- react
- react-native
- redux
- immutable
- react-native-router-flux
- react-native第三方原生组件库

## 简单的目录说明
- src（源码文件）
	- common（工具库）
	- components（项目组件）
	- reducers（reducer）
	- routes（页面）
	- App.js（入口文件）
- tools（工具库，目前只有构建器, 和一个初始化命令）
- .eslintrc（eslint 规范）

## 命令
```
	npm start --- 开启服务
	npm run test --- 开启测试
	npm run r Home --- 构建器，一行命令，自动构建页面模版
	npm run c Component --- 构建器，一行命令，自动构建组件模版
	npm run setup AppName --- 初始化命令
```

## IOS打包
```
react-native bundle --entry-file index.ios.js --bundle-output ./ios/index.ios.jsbundle --platform ios --assets-dest ./ios/bundle --dev false
```

## Android打包

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

- 在跟目录下，运行指令
```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

### 打包

- 在android 文件夹下运行
```
gradlew assembleRelease
```

- 以上就构建成功，文件放在android/app/build/outputs/apk/下面

### 初始化
>please run it after npm run setup AppName

```
	
	mkdir ex && cd ./ex && react-native init AppName
	mv ./AppName/ios ../ios && mv ./AppName/android ../android && cd ../ && rm -fr ex
	npm run new
	
```

>please check the ./ex/AppName/package.json, react && react-native version, to modify ./package.json