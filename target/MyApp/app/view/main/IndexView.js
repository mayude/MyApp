/**
 * 首页view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.IndexView', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.indexview',
	id: 'indexview',
	resizable : false,
	closeAction : 'hide',
	loadMask : true,
	initComponent:function(){
		Ext.apply(this, {
			items:[{
				xtype: 'image',
				width: 1112,
				height: 515,
				name: 'img_index',
				src: 'images/guide/index.png'
			}]
		});
		
		this.callParent(arguments);
	},
	listeners: {
    	//panel显示事件
		afterlayout: function(panel, layout, eOpts) {
			var indexImg = panel.down('image[name=img_index]');
			
			var top = parseInt((panel.getHeight() - indexImg.getHeight()) / 2);
			var left = parseInt((panel.getWidth() - indexImg.getWidth()) / 2);
			indexImg.setXY([left + 217, top + 112]);
    	}
    }
});
