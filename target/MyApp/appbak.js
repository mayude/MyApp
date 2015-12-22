/**
 * 主程序application.
 * @author 马玉德
 * @version 1.0.0, 2015-10-07
 */
Ext.Loader.setConfig({enabled:true});//必须加这句，否则会报错
Ext.application({
	requires: ['Ext.container.Viewport'],
	name: 'WMS',
	appFolder: 'app',
	autoCreateViewport: true,
	controllers: [
	    'MainCtl',
	    'MenuCtl'
	]
});