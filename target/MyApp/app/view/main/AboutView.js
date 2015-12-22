/**
 * 主界面关于我们view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.AboutView',{
	extend: 'Ext.window.Window',
	alias: 'widget.aboutview',
	id: 'aboutview',
	title: '关于',
	resizable : false,
	closeAction : 'hide',
	width : 523,
	height : 310,
	border : 0,
	layout: {
	    type: 'hbox',
	    align: 'stretch'
	},
	items : [{
		xtype: 'panel',
		border : 0,
		width: 523,
		layout: {
		    type: 'hbox',
		    align: 'stretch'
		},
		items:[{
			xtype: 'panel',
			width : 285,
			height : 290,
			border : 0,
			bodyStyle: 'background: url(images/header/aboutwindow.png) no-repeat;'
		},{
			xtype : 'panel',
			flex: 5,
			border : 0,
			items : [{
				xtype: 'panel',
				border : 0,
				width : 285,
				height : 290,
				bodyStyle:'background:#f7f8f8;',
				//bodyStyle:'background:#FFFFFF;',
				items :[{
					xtype: 'panel',
					width : 285,
					height : 65,
					border : 0,
					bodyStyle:'background:#f7f8f8;'
					//bodyStyle:'background:#FFFFFF;',
				},
				{
					xtype: 'panel',
					width : 285,
					height : 100,
					border : 0,
					bodyStyle: 'background: url(images/header/acbee1.png) no-repeat;'
				},{
					/*xtype: 'label',
					text : 'www.acbee.com',
					labelStyle : 'color: red;'*/
					bodyStyle:'background:#f7f8f8;',
					//bodyStyle:'background:#FFFFFF;',
					border : 0,
					html : '<a href='+"javascript:window.open('http://acbee.com/templates/T_second/index.aspx?nodeid=331','_blank')"+'>www.acbee.com</a>'
				},{
					xtype: 'panel',
					width : 285,
					height : 15,
					border : 0,
					bodyStyle:'background:#f7f8f8;'
					//bodyStyle:'background:#FFFFFF;',
				},{
					xtype: 'panel',
					width : 285,
					height : 60,
					border : 0,
					bodyStyle: 'background: url(images/header/acbee2.png) no-repeat;'
				}]
			}]
		}]
	}]
});