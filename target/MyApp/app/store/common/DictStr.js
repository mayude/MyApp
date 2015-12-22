/**
 * Created by myd on 15/11/19.
 */
/**
 * 数据字典store.
 * @author 苏亚欣
 * @version 1.0.0, 2015-07-16
 */
Ext.define('QH.store.common.DictStr',{
    extend: 'Ext.data.Store',
    requires: 'QH.model.common.DictMdl',
    model: 'QH.model.common.DictMdl',
    //自定义配置项，是否有空选项
    hasEmptyItem: false,
    proxy: {
        type: 'ajax',
        actionMethods: 'POST',
        url: 'dict/searchDictPage.action',
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    }


    //constructor: function (config) {
    //    if(undefined != config && null != config) {
    //        //将配置中的参数传递给proxy
    //        this.proxy.url = config.url;
    //        this.proxy.extraParams = config.params;
    //        this.hasEmptyItem = config.hasEmptyItem;
    //    }
    //    this.callParent();
    //},
    //listeners: {
    //    load : function(store, records, options ){
    //        if(this.hasEmptyItem) {
    //            //添加空选项
    //            ACBEE.Ext.Util.createComboBoxEmptyItem(store,
    //                'QH.model.common.DictMdl', {"dictId": -1, "dictName": "全部"});
    //        }
    //    }
    //}
});
