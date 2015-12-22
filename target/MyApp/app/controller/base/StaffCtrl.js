/**
 * Created by myd on 15/10/21.
 */
Ext.define('QH.controller.base.StaffCtrl',{
    extend:'Ext.app.Controller',
    stores:['StaffStore@QH.store.base'],
    models:['QH.model.base.StaffModel'],
    views: [
        'QH.view.base.StaffView',
        'QH.view.base.StaffEditView'
    ],
    requires: [

        'QH.controller.base.StaffEditCtrl'
    ],
    init:function(){
      this.callParent();
      this.control({
          //'staffview [action=save]': {
          //    click: this.AddClick
          //}
          //添加事件
          'staffview button[name=btn-add]':{
              click:this.AddClick
          },
          'staffview button[name=btn-delete]':{
              click:this.DeleteClick
          },
          'staffview button[name=btn-openstatus]':{
              click:this.OpenStatusClick
          },
          'staffview button[name=btn-closestatus]':{
              click:this.CloseStatusClick
          }
      });
    },


    /**
     * 按钮添加事件
     * @param button
     * @constructor
     */
    AddClick:function(button){
        //加载供应商编辑控制器
        ACBEE.Ext.Util.loadController(this.application, "QH.controller.base.StaffEditCtrl");
        //取得供应商window
        var win = ACBEE.Ext.Util.getWin('staffeditview');
        //设置编辑框可编辑
        //ACBEE.Ext.Util.disableCompoment([win.down('button[name=btn-add]')], win.down('form'), false);
        //清除表单内容
        win.down('form').getForm().reset();
        //设置供应商Id为零
        //win.oldSupplierId = 0;
        //保存当前表格的store
        win.parentStore = button.up('grid').getStore();
        win.setTitle('添加供应商信息');
        win.show();
    },
    DeleteClick:function(button){
        //取得按钮所在表格
        var grid = button.up('grid');
        //提交删除表格多条数据
        ACBEE.Ext.Util.ajaxDelGridData(grid, 'staff_pk', 'staff/delete.action', '员工');
    },

    OpenStatusClick:function(button){
        //取得按钮所在表格
        var grid = button.up('grid');

        ACBEE.Ext.Util.ajaxSwitchGridStatus(grid, 'areaId', 'warehouseArea/updateStatus.action', '库区', 1, 'status');
    },

    CloseStatusClick:function(button){
        //取得按钮所在表格
        var grid = button.up('grid');

        ACBEE.Ext.Util.ajaxSwitchGridStatus(grid, 'areaId', 'warehouseArea/updateStatus.action', '库区', 0, 'status');
    },
    editUser: function(grid, record) {

        //var edit = Ext.create('QH.view.base.StaffEditView').show();
        var win = Ext.widget("staffeditview");
        //win.down("form").loadRecord(record);
        win.show();

    }
});