# App-Template-Of-ReactNative

## 说明
这个模版暂时来说，已经算是react-native开发的最佳实践

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
- tools（工具库，目前只有构建器）
- .eslintrc（eslint 规范）

## 命令
```
	npm start --- 开启服务
	npm run test --- 开启测试
	npm run r Home --- 构建器，一行命令，自动构建页面模版
	npm run c Component --- 构建器，一行命令，自动构建组件模版
	npm run setup AppName --- 初始化命令

	// please run it after npm run setup AppName
	mkdir ex && cd ./ex && react-native init AppName
	mv ./AppName/ios ../ios && mv ./AppName/android ../android && cd ../ && rm -fr ex
	// please check the ./ex/AppName/package.json, react && react-native version, to modify ./package.json

```
