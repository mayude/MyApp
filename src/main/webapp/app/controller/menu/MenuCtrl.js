/**
 * 主界面导航菜单controller.
 * @author 马玉德
 * @version 1.0.0, 2015-07-07
 */
Ext.define('QH.controller.menu.MenuCtrl', {
	extend: 'Ext.app.Controller', 
   	stores: ['QH.store.menu.MenuStore'],
    models: ['QH.model.menu.MenuModel'],
    views:  ['QH.view.main.MenuView',
             'QH.view.main.TabView',
    		 'QH.view.main.HeaderView',
    		 'QH.view.main.FooterView'
    		],  
    //自动调用此方法
    init: function () {  
		//console.log('The panel was rendered');
	    this.control({
	    	//菜单视图
	    	'menuview': {
	    		//树结点单击事件
	    		itemclick: this.onTreeItemClick
	    	}
		});	
    },
	//树结点单击事件处理方法
	onTreeItemClick: function(view, record, item, index, e, eOpts) {
//		if (!record.get('leaf')) {	//非叶子结点
//			return false;
//		}
		var leaf = record.get('leaf');
    	//取得结点数据
    	var ctlName = record.get('ctlName');
    	ctlName = (null == ctlName && !leaf ? 'guide.BizGuideCtl' : ctlName);
    	var viewAlias = record.get('viewAlias');
    	viewAlias = (null == viewAlias && !leaf ? 'bizguideview' : viewAlias);
    	var viewType = record.get('viewType');
    	viewType = (null == viewType && !leaf ? 'panel' : viewType);
    	var params = record.get('params');
    	var displayName = record.get('displayName');
    	displayName = (null == displayName && !leaf ? record.get('text') : displayName);
    	var iconCls = record.get('iconCls');
    	var functionCodes = record.get('functionCodes');
    	
    	//判断控制器名和视图别名是否合法
    	if(null == ctlName || "" == ctlName
    		|| null == viewAlias || "" == viewAlias) {
    		Ext.Msg.show({
				width : 150,
				title : "错误",
				msg : "系统模块不存在，请联系管理员！",
				buttons : Ext.Msg.OK,
				icon: Ext.Msg.ERROR
			});
    		
    		return false;
    	}
    	
    	var ctl;
    	try { 
    		Ext.getBody().mask('正在加载模块，请稍候...');
	    	//动态加载控制器
	    	ctl = this.application.getController(ctlName);
    	} catch (e) { 
    		console.error(e);
    		Ext.getBody().unmask();
    		ctl = undefined;
    	}
    	if(undefined == ctl) {	//控制器不存在
    		Ext.Msg.show({
				width : 150,
				title : "错误",
				msg : "系统模块加载失败，请联系管理员！",
				buttons : Ext.Msg.OK,
				icon: Ext.Msg.ERROR
			});
    		
    		return false;
    	}
    	
    	if(viewType == 'window'){	//视图类型是window
    		ACBEE.Ext.Util.getWin(viewAlias).show();
    		Ext.getBody().unmask();
    	} else {	//视图类型是panel
    		Ext.getBody().unmask();
    		//根据id取得面板
    		var panel = Ext.getCmp(viewAlias);
            if(!panel){  //panel不存在，则创建
            	params = ('' == params ? '' : eval('(' + params + ')'));
                panel = {
                	id: viewAlias,
                    title: displayName, 
                    params: params,
                    functionCodes: functionCodes,
                    xtype: viewAlias,
                    closable: true,
                    iconCls: iconCls
                };
            } else if('bizguideview' == panel.xtype) {
            	panel.setTitle(displayName);
            	panel.setIconCls(iconCls);
            }

            //在Tab页中打开panel
            this.openTab(panel, viewAlias); 
    	}
	},
	//打开Tab页
	openTab : function (panel, id){
        var o = (typeof panel == "string" ? panel : id || panel.id);
        //根据id取得tab面板对象
        var mainTab = Ext.getCmp("mainTab"); 
        var tab = mainTab.getComponent(o); 
        if (tab) { //tab页存在，则激活tab页
        	if('bizguideview' == tab.xtype) {//模块引导视图
        		//删除原panel
        		mainTab.remove(tab, false); 
        		mainTab.doLayout();
        		//添加新panel
        		var p = mainTab.insert(1, panel);
        		mainTab.doLayout();
     
        		mainTab.setActiveTab(p);  
        	} else {
        		mainTab.setActiveTab(tab);
        	}
        } else if(typeof panel!="string"){  //添加新tab页
            panel.id = o;
            var p;
            if('bizguideview' == panel.xtype) {//模块引导视图
            	p = mainTab.insert(1, panel);
            } else {
            	p = mainTab.add(panel);
            }
            mainTab.setActiveTab(p);  
        }
	}
});