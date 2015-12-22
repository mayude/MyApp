/**
 * 供应商信息编辑view.
 * @author 高元称
 * @version 1.0.0, 2016-07-07
 */
Ext.define('QH.view.base.StaffEditView', {
    extend : 'Ext.window.Window',
    alias : 'widget.staffeditview',
    //id : 'staffeditview',
    title : '供应商信息编辑',
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
                        name: 'supplierCode',
                        allowBlank : false,
                        fieldLabel: '供应商编码',
                        length:16,
                        vtypeText:'供应商编码最多可输入16个字符<br>供应商编码只能输入英文、数字和字符',
                        vtype: 'exceptChinese'
                    },{
                        xtype: 'textfield',
                        width: 260,
                        name: 'supplierName',
                        allowBlank : false,
                        fieldLabel: '供应商名称',
                        length:100,
                        vtypeText : '供应商名称最多可输入100个字符',
                        vtype: 'limitLen'
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
                        xtype:'combobox',
                        fieldLabel:'供应商性质',
                        name:'supplierNature',
                        width:260,
                        listConfig: {
                            getInnerTpl: function(displayField) {
                                return ACBEE.Ext.Util.formatComboxTpl(displayField, 9);
                            }
                        },
                        allowBlank : false,
                        editable: false,
                        emptyText: "--请选择--",
                        queryMode: 'remote',
                        displayField: 'dictName',
                        valueField: 'dictId',
                        store: Ext.create('QH.store.common.DictStr',{
                            params:{
                                dictType: 1,
                                status: 1
                            },
                            url: 'dict/getDictList.action'
                        })
                    },{
                        xtype: 'textfield',
                        width: 260,
                        name: 'corporation',
                        fieldLabel: '法人代表',
                        allowBlank : false,
                        length:20,
                        vtypeText:'法人代表最多可输入20个字符,且只能输入中英文',
                        vtype: 'chnEng'
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
                        name: 'address',
                        fieldLabel: '地址',
                        length:100,
                        vtypeText:'供应商地址最多可输入100个字符',
                        vtype: 'limitLen'
                    },{
                        xtype:'textfield',
                        fieldLabel:'开户行',
                        name:'bank',
                        width:260,
                        length:100,
                        vtypeText:'开户行最多可输入100个字符<br>开户行只能输入英文、中文和字符',
                        vtype: 'exceptNumber'
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
                        name: 'account',
                        fieldLabel: '账号',
                        length:50,
                        vtypeText:'账号最多可输入50个字符<br>账号只能输入数字',
                        vtype: 'number'
                    },{
                        xtype: 'textfield',
                        width: 260,
                        name: 'tariff',
                        fieldLabel: '税号',
                        length:20,
                        vtypeText:'税号最多可输入20个字符',
                        vtype: 'limitLen'
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
                        name: 'contacts1',
                        fieldLabel: '联系人1',
                        allowBlank : false,
                        length:20,
                        vtypeText:'联系人最多可输入20个字符<br>联系人只能输入中文和英文',
                        vtype: 'chnEng'
                    },{
                        xtype: 'textfield',
                        width: 260,
                        name: 'tel1',
                        fieldLabel: '电话1',
                        allowBlank : false,
                        length:50,
                        vtypeText:'电话最多可输入50个字符<br>电话号码只能输入数字和符号',
                        vtype: 'phone'
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
                        name: 'contacts2',
                        fieldLabel: '联系人2',
                        length:20,
                        vtypeText:'联系人最多可输入20个字符<br>联系人只能输入中文和英文',
                        vtype: 'chnEng'
                    },{
                        xtype: 'textfield',
                        width: 260,
                        name: 'tel2',
                        fieldLabel: '电话2',
                        length:50,
                        vtypeText:'电话最多可输入50个字符<br>电话号码只能输入数字和符号',
                        vtype: 'phone'
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
                        fieldLabel:'供应开始日期',
                        name:'supplyBeginDate',
                        labelAlign : 'right',
                        width:260,
                        format : "Y-m-d",
                        allowBlank : false,
                        length:10,
                        vtypeText:'供应开始日期必须早于或等于供应停止日期',
                        vtype: 'date'
                    },{
                        xtype:'datefield',
                        fieldLabel:'供应停止日期',
                        name:'supplyEndDate',
                        labelAlign : 'right',
                        width:260,
                        format : "Y-m-d",
                        allowBlank : false,
                        length:10,
                        vtypeText:'供应停止日期必须晚于或等于供应开始日期',
                        vtype: 'date',
                        compareTo:'supplyBeginDate'
                    }]
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
                        name : 'status',
                        inputValue: '1',
                        checked:"checked"
                    },{
                        boxLabel : '禁用',
                        name : 'status',
                        inputValue: '0'
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