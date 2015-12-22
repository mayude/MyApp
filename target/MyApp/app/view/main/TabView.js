/**
 * 主界面Tab页view
 * author 马玉德
 * 2015-10-20
 */
Ext.define('QH.view.main.TabView',{
		extend:'Ext.tab.Panel',
		requires:[
		    'QH.view.main.IndexView'
		],
		//layout:'fit',
		//注意 加上widget.
		alias:'widget.tabview',
		region:'tabview',
		activeTab:0,
		items:[
		       {
		    	   title:'主页',
		    	   //html:'欢迎使用后台管理系统 版本1.0'
		    	   xtype: 'indexview'
		       }
		],
		initComponent:function(){
			Ext.apply(this, { 
				id: 'mainTab', 
			    region: 'center',
			    autoScroll : false
			});
			this.callParent(arguments);
		}
	}
)