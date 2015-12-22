/**
 * 主界面左侧导航树view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.MenuView',{
	extend: 'Ext.tree.Panel', 
	alias: 'widget.menuview',
	requires:['QH.store.menu.MenuStore'],
	initComponent : function(){ 
		Ext.apply(this, { 
			title: '系统导航', 
			margins : '0 0 -1 1', 
	        region:'west', 
	        border : false, 
	        enableDD : true, 
	        split: true, 
	        width : 210, 
	        minWidth : 210, 
	        maxWidth : 210, 
	        rootVisible: false, 
	        containerScroll : true, 
	        collapsible : true, 
	        autoScroll : false,
	        store : Ext.create('QH.store.menu.MenuStore', {
				url: 'loginUserMenu.action'
		    })
		});
		this.callParent(arguments); 
	} 
});