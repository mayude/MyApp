/**
 * 主界面左侧导航菜单store.
 * @author 马玉德
 * @version 1.0.0, 2015-07-07
 */
Ext.define('QH.store.menu.MenuStore',{
    extend: 'Ext.data.TreeStore',
    requires: 'QH.model.menu.MenuModel',
 	model: 'QH.model.menu.MenuModel',
 	//autoLoad: true,
 	
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            // These are static JSON files that never change. In a real system
            // they will normally point to a page that gets processed on the server.
            read: 'data/menu.json'
            //update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            rootProperty: '',
            successProperty: 'success'
        }
    }
 	
//	proxy: {
//        type: 'ajax',
//        reader: {
//            type: 'json',
//            successProperty: 'success'
//        }
//    },

//    constructor: function (config) {
//    	if(undefined != config && null != config) {
//	 		//将配置中的参数传递给proxy
//	        this.proxy.url = config.url;
//	        this.proxy.extraParams = config.params;
//    	}
//        this.callParent();
//    }
});