/**
 * 主界面顶部Logo，系統名称等view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.HeaderView', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.headerview',
	name: 'headerView',
	border : false,
	region : 'north',
	height : 80,
	layout: {
	    type: 'hbox',
	    align: 'stretch'
	},
	defaults: {
		border: false
	},
	items : [{
		xtype: 'panel',
		width: 500,
		layout: {
		    type: 'hbox',
		    align: 'stretch'
		},
		bodyCls: 'header_bg',
		defaults: {
			border: false
		},
		items:[{
			xtype: 'panel',
			width: 175,
			bodyCls: 'header_bg header_logo',
			items:{
				xtype: 'image',
				name: 'header_logo',
				width: 139,
				height: 52,
				src: 'images/header/logo.png'
			}
		},{
			xtype : 'panel',
			bodyCls: 'header_bg',
			flex: 5,
			bodyCls: 'header_systemName',
            html: '微讯管理系统'
		}]
	}, {
		xtype: 'panel',
		flex: 1,
		layout: {
		    type: 'vbox',
		    align: 'stretch'
		},
		defaults: {
			border: false
		},
		bodyCls: 'header_bg',
		items:[{
			xtype: 'panel',
			name: 'header_logoutpanel',
			height: 23,
			style: 'text-align:right;',
			bodyCls: 'header_bg',
			items:[{
				xtype: 'image',
				margin: 0,
				width: 74,
				height: 23,
				src: 'images/header/helpbg.png',
				style: 'cursor:pointer',
				title: '帮助',
				name: 'help'
			},{
				xtype: 'image',
				margin: 0,
				width: 91,
				height: 23,
				src: 'images/header/modifypwdbg.png',
				style: 'cursor:pointer',
				title: '修改密码',
				name: 'modifypwd'
			}, {
				xtype: 'image',
				margin: 0,
				width: 74,
				height: 23,
				src: 'images/header/logoutbg.png',
				style: 'cursor:pointer',
				title: '注销',
				name: 'logout'
			}]
		},{
			xtype: 'panel',
			name: 'header_userpanel',
			height: 34,
			style: 'text-align:right;',
			bodyCls: 'header_bg header_welcomemsg',
			items: [{
				id : 'welcomemsg',
				xtype : 'label',
				text : '欢迎您，XXX'
			}, {
				xtype : 'label',
				text : '  日期：' + Ext.Date.format(new Date(), 'Y-m-d')
			}]
		},{
			xtype: 'panel',
			name: 'header_switchpanel',
			height: 23,
			style: 'text-align:right;',
			layout: {
			    type: 'hbox',
			    align: 'stretch'
			},
			defaults: {
				border: false
			},
			bodyCls: 'header_bg',
			items: [{
				xtype: 'panel',
				flex: 1,
				bodyCls: 'header_bg',
				height: 23
			}, {
				xtype: 'panel',
				width: 150,
				bodyStyle: 'background: url(images/header/switchbg.png) no-repeat;padding-top:3px;',
				items: [{
					xtype: 'image',
					width: 21,
					height: 9,
					src: 'images/header/switchclose.png',
					style: 'cursor:pointer',
					title: '关闭',
					name: 'header_switch'
				}]
			}]
		}]
	}]
});