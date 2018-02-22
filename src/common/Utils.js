import { PixelRatio, Platform, Dimensions } from 'react-native'

const Utils = {
	// 版本
	version: 'V1.0.0',
	
	// 主题颜色
	themeColor: '#03a9f4',
	
	// 目前平台
	OS: Platform.OS,
	
	// 单位像素
	pixel: 1 / PixelRatio.get(),
	
	// 屏幕尺寸
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height,
	
	// 字体大小Rem
	fontRem: (Dimensions.get('window').width / 320) * 16,

	// 发出请求
	ajax() {},
}

export default Utils
