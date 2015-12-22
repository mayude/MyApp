/**
 * 供应商信息编辑controller.
 * @author 马玉德
 * @version 1.0.0, 2015-12-07
 */
Ext.define('QH.controller.base.StaffEditCtrl',{
   extend: 'Ext.app.Controller',
	views: [
		'base.StaffEditView'
	],
	init: function() {
		//调用父类方法
		this.callParent();
		this.control({
			//保存按钮事件
			'staffeditview  button[name=btn-save]': {
				click: this.onSave
			},
	    	//窗体事件
	    	//'staffeditview' : {
	    	//	//视图显示事件
				//show: this.onShow
	    	//}
		});
	},
	/**
     * 视图显示事件
     */
	onShow: function(view, eOpts) {
    	//刷新供应商性质下拉框数据
    	view.down('combobox[name=supplierNature]').getStore().reload();
    },
	//保存按钮事件
	onSave: function(button) {
		console.log("run");
		var win = button.up('window');
		//取得表单对象
		var form = win.down('form');
		//验证表单
		//if(!form.isValid()){//表单有错误
		//	ACBEE.Ext.Util.showAlertBox("表单有错误，请修改后再保存！");
		//	return false;
		//}

	    //var oldSupplierId = win.oldSupplierId;
		//提交表单内容到后台
		var formValues=form.getForm().getValues();

		ACBEE.Ext.Util.submitFormData(form, 'staff/save.action', {datas: Ext.encode(formValues)},
			"员工信息保存成功", "员工信息保存失败！！！", function() {
	    	if(undefined != win.parentStore) {
				//刷新父窗体表格
				win.parentStore.reload();
			}
			win.close();
		});
	}
});