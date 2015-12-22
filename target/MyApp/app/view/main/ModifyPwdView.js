/**
 * 主界面修改密码view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.ModifyPwdView',{
	extend: 'Ext.window.Window',
	alias: 'widget.modifypwdview',
	id: 'modifypwdview',
	title: '修改密码',
	resizable : false,
	closeAction : 'hide',
	width : 330,
	height : 240,
	layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
	},
	initComponent : function() {
		this.items = [ {
			xtype : "form",
			width : 300,
			height : 180,
			buttonAlign : "center",
			buttons : [ {
				id : 'btnSave',
				text : "保存",
				action : 'save'
			}, {
				text : "取消",
				scope: this,
				handler: this.close
			} ],
			defaults : {
				xtype : 'textfield',
				labelAlign : 'right',
				labelWidth : 100,
				margin: '20 0',
				msgTarget : 'title',
				width : 280,
				maxLength : 16,
				allowBlank : false,
				inputType : 'password'
			},  
			items : [ {
				fieldLabel : '原密码',
				id : 'oldpwd',
				name : 'oldpwd',
				blankText : '原密码不能为空'
			}, {
				fieldLabel : '新密码',
				id : 'newpwd',
				name : 'newpwd',
				blankText : '新密码不能为空'
			}, {
				fieldLabel : '确认密码',
				id : 'confrimpwd',
				name : 'confrimpwd',
				blankText : '确认密码不能为空',
				validator: function(value){
					var pw = this.previousSibling().value;
					if(value != pw){
						return '确认密码与新密码不一致！';
					} else {
						return true;
					}
				}
			} ]
		} ];
		
		this.callParent(arguments); 
	} 
});