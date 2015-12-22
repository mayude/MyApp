Ext.define('QH.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',

    title : 'All Users',
    store: 'Users',
    dockedItems: [
        {
            xtype:'panel',
            border: 1,
            dock: 'top',
            width:'100%',
            height:75,
            items:[{
                xtype:'panel',
                layout : 'column',
                //bodyStyle:'background:#E8E8E8;',
                border : false,
                defaults : {
                    labelAlign : 'right',
                    labelWidth : 70,
                    margin : 6
                },
                items:[{
                    xtype:'textfield',
                    fieldLabel:'库位号',
                    name:'locationNo',
                    labelWidth:90,
                    width:250,
                    length:50,
                    vtypeText : '库位号最多可输入50个字符',
                    vtype: 'limitLen'
                },{
                    xtype:'combobox',
                    fieldLabel:'库位性质',
                    name:'natureId',
                    labelWidth:70,
                    width:230,
                    listConfig: {
                        getInnerTpl: function(displayField) {
                            return ACBEE.Ext.Util.formatComboxTpl(displayField, 9);
                        }
                    },
                    editable: false,
                    queryMode: 'remote',
                    displayField: 'natureName',
                    valueField: 'natureId',
                    value:-1
                    //store: Ext.create('WMS.store.common.LocationNatureNameStr',{
                    //    params:{
                    //        status: -1,
                    //        areaId:-1
                    //    },
                    //    hasEmptyItem: true,
                    //    url: 'locationNature/getLocationNatureList.action'
                    //})
                },{
                    xtype:'combobox',
                    fieldLabel:'所属库区',
                    name:'areaName',
                    labelWidth:90,
                    width:250,
                    editable: false,
                    queryMode: 'remote',
                    displayField: 'areaName',
                    valueField: 'areaId',
                    value:-1,
                    listConfig: {
                        getInnerTpl: function(displayField) {
                            return ACBEE.Ext.Util.formatComboxTpl(displayField, 9);
                        }
                    }
                    //store: Ext.create('WMS.store.baseinfo.WarehouseAreaStr',{
                    //    params:{
                    //        areaNature: -1,
                    //        status: -1
                    //    },
                    //    hasEmptyItem: true,
                    //    url: 'warehouseArea/getWarehouseAreaList.action'
                    //})
                },{
                    border:false
                },{
                    xtype:'checkbox',
                    boxLabel:'<span>显示禁用项</span><img data-qtip="选中时显示所有查询条件（下拉框项）中已禁用的项，<br/>查询结果中包含已禁用项的结果；未选中时不显示" src="images/hint.png" class="hintico">',
                    name: 'showForbidden',
                    checked: true
                }]
            },{
                xtype: 'panel',
                //bodyStyle:'background:#E8E8E8;',
                layout : 'column',
                border:false,
                defaults : {
                    labelAlign : 'right',
                    labelWidth : 70,
                    margin: 6
                },
                items:[{
                    xtype:'textfield',
                    fieldLabel:'管理人员',
                    name:'manager1',
                    labelWidth:90,
                    width:250,
                    length:20,
                    vtypeText : '管理人员最多可输入20个字符，只允许输入中文和英文',
                    vtype: 'chnEng'
                },{
                    xtype:'textfield',
                    fieldLabel:'联系电话',
                    name:'tel1',
                    labelWidth:70,
                    width:230,
                    length:50,
                    vtypeText : '联系电话最多可输入50个字符，只能输入数字和符号',
                    vtype: 'phone'
                },{
                    xtype:'combobox',
                    fieldLabel:'状态',
                    editable: false,
                    name:'status',
                    labelWidth :90,
                    width : 250,
                    displayField: 'name',
                    valueField: 'value',
                    //store: Ext.create('WMS.store.common.StatusStr'),
                    value: '-1'
                },{
                    xtype:'button',
                    width: 60,
                    text:'查询',
                    name:'btn-search',
                    iconCls: 'btn-search'
                },{
                    xtype:'button',
                    width: 60,
                    text:'重置',
                    name:'btn-clear',
                    iconCls: 'btn-clear'
                }]
            }]
        },
    {
        xtype : 'panel',
        border : false,
        dock: 'top',
        layout : 'column',
        height:50,
        defaults : {
            width: 60,
            margin: 6
        },
        items:[{
            xtype : 'button',
            text : '添加',
            name : 'btn-add',
            iconCls: 'btn-add'
        },{
            xtype : 'button',
            text : '删除',
            name : 'btn-delete',
            iconCls: 'btn-delete'
        },{
            xtype : 'button',
            text : '导入',
            name : 'btn-import',
            iconCls: 'btn-import'
        },{
            xtype:'button',
            text:'导出',
            name:'btn-export',
            iconCls: 'btn-export'
        },{
            xtype:'button',
            text:'启用',
            name:'btn-openStatus',
            iconCls: 'btn-openStatus'
        },{
            xtype:'button',
            text:'禁用',
            name:'btn-closeStatus',
            iconCls: 'btn-closeStatus'
        }]
    }],
    selModel : Ext.create('Ext.selection.CheckboxModel'), // 每行前面加一个勾选框
    columns: [
        {header: '编号',  dataIndex: 'user_number',  flex: 1},
        {header: '姓名', dataIndex: 'user_name', flex: 1},
        {header: '密码', dataIndex: 'user_password', flex: 1},
        {header: '用户组', dataIndex: 'fk_roles_pk', flex: 1},
        {header: '性别', dataIndex: 'user_sex', flex: 1},
        {header: '生日', dataIndex: 'user_birthday', flex: 1},
        {header: '工位', dataIndex: 'fk_station_pk', flex: 1},
        {header: '入职时间', dataIndex: 'user_intime', flex: 1},
        {header: '电话', dataIndex: 'user_phone', flex: 1},
        {header: '邮箱', dataIndex: 'user_email', flex: 1}
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        pageSize: 25,
        height : '30',
        store : 'Users', // 主要是取store中从后台返回的totalCount，以及在store中设置的pagesize，就可以进行分页。具体的数据分页在后台的sql语句中进行。
        displayMsg : '{0}--{1},共{2}条记录',
        emptyMsg : '没有记录',
        displayInfo : true,
        beforePageText : '第',
        afterPageText : '页，共{0}页',
        firstText : '首页',
        laseText : '末页',
        nextText : '下页',
        prevText : '上页'
    }

});


