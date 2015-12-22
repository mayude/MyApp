/**
 * 主界面底部版权信息view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.FooterView',{
	extend: 'Ext.Toolbar', 
	//extend:'Ext.Component',
	alias: 'widget.footerview',
	initComponent : function(){ 
		Ext.apply(this,{ 
			region:"south", 
			height:23, 
			items:['->',"技术支持 ©2015 青海微讯科技限公司", '->']
		}); 
		this.callParent(arguments); 
	} 
});