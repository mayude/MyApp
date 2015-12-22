/**
 * 员工信息编辑view.
 * @author 马玉德
 * @version 1.0.0, 2016-07-07
 */
Ext.define('QH.view.base.StaffEditView', {
    extend : 'Ext.window.Window',
    alias : 'widget.staffeditview',
    title : '员工信息编辑',
    region : 'center',
    resizable : false,
    closeAction : 'hide',
    constrainHeader:true,
    width : 600,
    height : 390,
    modal : true,
    layout: {
        align: 'middle',
        pack: 'center',
        type: 'hbox'
    },
    initComponent : function() {
        this.items = [{
            xtype : 'panel',
            border : false,
            margin: '10',
            items : [{
                xtype : 'form',
                border : false,
                items : [{
                    xtype : 'panel',
                    layout:'column',
                    border: false,
                    defaults : {
                        labelAlign : 'right',
                        labelWidth : 100,
                        margin: '6'
                    },
                    items: [{
                        xtype: 'textfield',
                        width: 260,
                        name: 'staff_name',
                        allowBlank : false,
                        fieldLabel: '员工姓名',
                        length:16
                        //vtypeText:'员工姓名最多可输入16个字符<br>供应商编码只能输入英文、数字和字符',
                        //vtype: 'exceptChinese'
                    },{
                        xtype: 'textfield',
                        width: 260,
                        name: 'staff_loginname',
                        allowBlank : false,
                        fieldLabel: '登录账号',
                        length:100,
                        //vtypeText : '登录账号最多可输入100个字符',
                        //vtype: 'limitLen'
                    }]
                },{
                    xtype:'panel',
                    layout:'column',
                    border: false,
                    defaults : {
                        labelAlign : 'right',
                        labelWidth : 100,
                        margin: '6'
                    },
                    items:[{
                        xtype: 'textfield',
                        width: 260,
                        name: 'staff_password',
                        fieldLabel: '登录密码',
                        allowBlank : false,
                        length:20,
                        //vtypeText:'登录最多可输入20个字符,且只能输入中英文',
                        //vtype: 'chnEng'
                    },{
                        xtype:'panel',
                        layout:'column',
                        border: false,
                        defaults : {
                            labelAlign : 'right',
                            xtype: 'radiofield',
                            labelWidth : 100,
                            margin: '0 5'
                        },
                        items:[{
                            xtype: 'displayfield',
                            margin: '0 0 0 5',
                            fieldLabel: '性别',
                            allowBlank : false,
                            width: 100,
                            style: 'text-align: right;'
                        },{
                            boxLabel : '男',
                            name : 'staff_sex',
                            inputValue: '1',
                            checked:"checked"
                        },{
                            boxLabel : '女',
                            name : 'staff_sex',
                            inputValue: '0'
                        }]
                    }]
                },{
                    xtype:'panel',
                    layout:'column',
                    border: false,
                    defaults : {
                        labelAlign : 'right',
                        labelWidth : 100,
                        margin: '6'
                    },
                    items:[{
                        xtype: 'textfield',
                        width: 260,
                        name: 'staff_phone',
                        fieldLabel: '联系电话',
                        length:100,
                        //vtypeText:'电话号码最多可输入100个字符',
                        //vtype: 'phone'
                    },{
                        xtype:'textfield',
                        fieldLabel:'邮箱',
                        name:'staff_email',
                        width:260,
                        length:100,
                        ////vtypeText:'开户行最多可输入100个字符<br>开户行只能输入英文、中文和字符',
                        //vtype: 'exceptNumber'
                    }]
                },{
                    xtype:'panel',
                    layout:'column',
                    border: false,
                    defaults : {
                        labelAlign : 'right',
                        labelWidth : 100,
                        margin: '6'
                    },
                    items:[{
                        xtype:'datefield',
                        fieldLabel:'生日',
                        name:'staff_birthday',
                        labelAlign : 'right',
                        width:260,
                        format : "Y-m-d",
                        allowBlank : false,
                        length:10,
                        //vtypeText:'供应开始日期必须早于或等于供应停止日期',
                        //vtype: 'date'
                    },{
                        xtype:'datefield',
                        fieldLabel:'入职日期',
                        name:'staff_intime',
                        labelAlign : 'right',
                        width:260,
                        format : "Y-m-d",
                        allowBlank : false,
                        length:10,
                        //vtypeText:'供应停止日期必须晚于或等于供应开始日期',
                        //vtype: 'date',
                        //compareTo:'supplyBeginDate'
                    }]
                },{
                    xtype:'panel',
                    layout:'column',
                    border: false,
                    defaults : {
                        labelAlign : 'right',
                        labelWidth : 100,
                        margin: '6'
                    },
                    items:[{
                        xtype: 'textfield',
                        width: 260,
                        name: 'fk_roles_pk',
                        fieldLabel: '职位',
                        length:20,
                        //vtypeText:'联系人最多可输入20个字符<br>联系人只能输入中文和英文',
                        //vtype: 'chnEng'
                    },{
                        xtype:'panel',
                        layout:'column',
                        border: false,
                        defaults : {
                            labelAlign : 'right',
                            xtype: 'radiofield',
                            labelWidth : 100,
                            margin: '0 5'
                        },
                        items:[{
                            xtype: 'displayfield',
                            margin: '0 0 0 5',
                            fieldLabel: '状态',
                            allowBlank : false,
                            width: 100,
                            style: 'text-align: right;'
                        },{
                            boxLabel : '启用',
                            name : 'staff_status',
                            inputValue: '1',
                            checked:"checked"
                        },{
                            boxLabel : '禁用',
                            name : 'staff_status',
                            inputValue: '0'
                        }]
                    }]
                }]
            }]
        }],
            this.fbar = [
                {
                    xtype: 'button',
                    margin: '6',
                    text: '保存',
                    name: 'btn-save',
                    iconCls: 'btn-save'
                },{
                    xtype: 'button',
                    margin: '6',
                    text: '取消',
                    name: 'btn-cancel',
                    iconCls: 'btn-cancel',
                    scope: this,
                    handler: this.close
                }];
        this.callParent(arguments);
    }
});