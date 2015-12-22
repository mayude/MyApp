/**
 * 为form表单中必填项添加红色*号标志
 */ 
Ext.override(Ext.form.field.Base, {
	//针对form中的基本组件 　　     
	initComponent:function(){
		this.msgTarget='side';
		//如为必填项，则在标签前加*号必填标志
		if(this.allowBlank !== undefined && !this.allowBlank){
			if(this.fieldLabel){
				this.fieldLabel = '<font class="requiredflag">* </font>' + this.fieldLabel;
			}
		}
		this.callParent(arguments);
	}
});
/**
 * 为form表单中必填项添加红色*号标志
 */
Ext.override(Ext.container.Container, {
	//针对form中的容器组件     
	initComponent:function(){
		this.msgTarget='side';
		//如为必填项，则在标签前加*号必填标志
		if(this.allowBlank!==undefined && !this.allowBlank){
			if(this.fieldLabel){
				this.fieldLabel = '<font class="requiredflag">* </font>' + this.fieldLabel;
			}
		}
		this.callParent(arguments);
	}
});

/**
 * 扩展Ext.util.Format
 */
Ext.apply(Ext.util.Format, {
	/**
	 * 取得字符串的字节长度
	 */
	lenB : function(str){
    	return str.replace(/[^\x00-\xff]/g,"**").length;
    }
});