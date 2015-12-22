/**
 * 主界面左侧导航菜单model.
 * @author 马玉德
 * @version 1.0.0, 2015-07-07
 */
Ext.define('QH.model.menu.MenuModel', {
	extend : 'Ext.data.Model',
	fields : [ 
	           {name:'text',type: 'string'}, 
	           {name:'displayName',type: 'string'}, 
	           {name:'iconCls',type: 'string'},
	           {name:'leaf',type: 'string'}, 
	           {name:'expanded',type: 'string'}, 
	           {name:'menuNo',type: 'string'},
	           {name:'remark',type: 'string'}, 
	           {name:'ctlName',type: 'string'}, 
	           {name:'viewAlias',type: 'string'}, 
	           {name:'viewType',type: 'string'}, 
	           {name:'params',type: 'string'},
	           {name:'functionCodes',type: 'string'}, 
	           {name:'checked',type: 'string'}
	 ]
})