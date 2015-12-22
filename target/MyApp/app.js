/**
 * 主程序
 * @author 马玉德
 * @version 1.0.0 2015-10-17
 */
Ext.Loader.setConfig({enabled:true});//必须加这句，否则会报错
Ext.application({
	requires: ['Ext.container.Viewport'],
		//定义命名控件
		name:'QH',
		//定义文件夹
		appFolder:'app',
		autoCreateViewport: true,
		//添加控制器
		controllers:[
		             'QH.controller.menu.MenuCtrl',
		             'QH.controller.menu.MainCtrl'
		             ],
		//页面完全加载后将运行此方法
//		launch:function() {
//	        Ext.create('Ext.container.Viewport', {
//	        	//布局方式
//	        	layout:'border',
//	            items: [{
//	            			xtype:'top'//这里可以写对应view的alias的属性
//	            		},{
//	                    	xtype:'accordion'
//	                    },{
//	                    	xtype:'center'
//	                    },{
//	                    	xtype:'bottom'
//	                    }
//	            ]
//	        });
//	    }
	}
);