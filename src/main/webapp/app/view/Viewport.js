/**
 * 主界面viewport.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.Viewport',{
	extend : 'Ext.Viewport',
	layout : 'border',
	hideBorders : true,
	requires : [ 
	    'QH.view.main.HeaderView',
	    'QH.view.main.MenuView',
		'QH.view.main.TabView',
		'QH.view.main.FooterView'
	],
	items : [ {
		region : 'north',
		xtype : 'headerview'
	}, {
		region : 'center',
		xtype : 'tabview'
	}, {
		region : 'south',
		xtype : 'footerview'
	}, {
		region : 'west',
		xtype : 'menuview'
	} ]
});