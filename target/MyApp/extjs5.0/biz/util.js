Ext.namespace('ACBEE.Ext');

ACBEE.Ext.Util = {
	//登录用户id
	loginUserId: '',
	//登录用户姓名
	loginUserName: '',
	/**
	 * 显示警告信息
	 * @param msg 提示信息
	 * @param icon 图标
	 * @param width: 对话框的宽度
	 * @param onAfterAlert: 提示信息后执行的方法
	 * @return 无
	 */
	showAlertBox: function(msg, icon, width, onAfterAlert) {
		if(undefined == icon || null == icon) {
			icon = Ext.Msg.WARNING;
		}
		
		if(undefined == width || null == width) {
			width = 150;
		}

		Ext.Msg.show({
			width : width,
			title : "系统提示",
			msg : msg,
			buttons : Ext.Msg.OK,
			icon: icon,
			fn: onAfterAlert
		});
	},
	/**
	 * 显示警告信息
	 * @param title : 消息框标题栏
	 * @param msg:消息内容
	 * @param width:消息框的宽度
	 * @param multiline: 是否显示多行文本
	 * @param closable:是否显示关闭按钮
	 * @param buttons:按钮 	Ext.MessageBox.OK：只有"确定"按钮 
	 * 						Ext.MessageBox.CANCEL:只有"取消"按钮 
	 * 						Ext.MessageBox.OKCANCEL:有"确定"和"取消"按钮 
	 * 						Ext.MessageBox.YESNO: 有"是"和"否"按钮 
	 * 						Ext.MessageBox.YESNOCANCEL：有"是"、"否"和"取消"按钮 
	 * @param icon 图标		Ext.MessageBox.INFO:信息图标 
	 * 						Ext.MessageBox.WARNING:警告图标 
	 * 						Ext.MessageBox.QUESTION:询问图标 
	 * 						Ext.MessageBox.ERROR:错误图标
	 * @param fn:回调函数
	 * @return 无
	 */
	showCustomAlertBox: function(title, msg, width, multiline, closable, buttons, icon, fn) {
		var config = {    
	        title: title,    
	        msg: msg,    
	        width: width,    
	        multiline: multiline,    
	        closable: closable,    
	        buttons: buttons,    
	        icon: icon,    
	        fn:  fn
	     };  
	    Ext.MessageBox.show(config); 
	},
	/**
	 * 显示进度条框
	 * @param msg: 消息内容
	 * @param width: 消息框的宽度
	 * @return 无
	 */
	showProgressBox: function(msg, width) {
		if(undefined == width || null == width) {
			width = 300;
		}
		
		Ext.MessageBox.show({
			msg : msg,
			width : width,
			wait : true,
			waitConfig : {
				interval : 100
			}
		});
	},
	/**
	 * 关闭进度条框
	 */
	hideProgressBox: function() {
		Ext.MessageBox.hide();
	},
	/**
	 * 取得window(别名作为ID)
	 * @param id: window的id
	 * @param aliasName: window的别名
	 * @param params: 向window传递的参数，格式为{参数名1:参数值1,参数名2:参数值2}
	 * @param closeAction: 关闭window方式，值为"hide"或"destroy"
	 * @return window对象
	 */
	getWindow : function(id, aliasName, params, closeAction) {
		//根据id取得window
		var win= Ext.getCmp(id);
		if(!win){	//window不存在，则创建
			win = Ext.widget(aliasName, params);
			win.closeAction = (null == closeAction || undefined == closeAction ? 'hide' : closeAction);
		}
		
		return win;
	},
	/**
	 * 取得window(别名作为ID)
	 * @param aliasName: window的别名
	 * @param params: 向window传递的参数，格式为{参数名1:参数值1,参数名2:参数值2}
	 * @param closeAction: 关闭window方式，值为"hide"或"destroy"
	 * @return window对象
	 */
	getWin : function(aliasName, params, closeAction) {
		return this.getWindow(aliasName, aliasName, params, closeAction);
	},
	/**
	 * 添加下拉框空选项
	 * @param store: store
	 * @param modelName: 模型名称
	 * @param data: 数据，格式为{名称1: 值1, 名称2: 值2}
	 * @return 无
	 */
	createComboBoxEmptyItem: function(store, modelName, data) {
    	var rs = [Ext.create(modelName, data)];
        store.insert(0, rs);  
	},
	/**
	 * 加载控制器
	 * @param app: 应用对象
	 * @param ctlName: 控制器名称
	 * @return 成功返回控制器对象，否则返回false
	 */
	loadController: function(app, ctlName) {
		try { 
			return app.getController(ctlName);
		} catch (e) {
			console.error(e);
			
			this.showAlertBox("系统模块加载时发生异常，请联系管理员！", Ext.Msg.ERROR, 300);
			
			return false;
		}
	},
	/**
	 * 检测是否选中表格行
	 * @param grid: 列表
	 * @param msg: 未选中时的提示信息
	 * @return 选中返回记录集，未选中返回null
	 */
	checkGirdRowSelected: function(grid, msg) {
		//取得表格选中行
		var records = grid.getSelectionModel().getSelection();
		if(0 == records.length) {
			this.showAlertBox(msg, Ext.Msg.WARNING, 300);
			
			return null;
		}
		
		return records;
	},
	/**
	 * 将store数据生成数组
	 * @param store: store对象
	 * @return 成功返回json对象，失败返回null
	 */
	getStoreArrayData: function(store) {
		if(null == store || undefined == store) {
			return null;
		}
		
		var recordArray = new Array(); 
		//遍历store，将数据保存到数组
		store.each(function(record) {
			recordArray.push(record.data); 
		});
		
		//转换成json格式返回
		return Ext.encode(recordArray);
	},
	/**
	 * 将records数据生成数组
	 * @param records: records对象
	 * @return 成功返回json对象，失败返回null
	 */
	getRecordsArrayData: function(records) {
		if(null == records || undefined == records) {
			return null;
		}
		
		var recordArray = new Array(); 
		//遍历records，将数据保存到数组
		for(var i=0;i<records.length;i++) {
			recordArray.push(records[i].data); 
		};
		
		//转换成json格式返回
		return Ext.encode(recordArray);
	},
	/**
	 * 根据记录集取得id数组
	 * @param records: records对象
	 * @param idName: id名称
	 * @return 成功返回id数组，失败返回null
	 */
	getIdArrayFromRecords: function(records, idName) {
		if(null == records || undefined == records) {
			return null;
		}
		
		var idArray = new Array(); 
		//遍历records，将数据保存到数组
		for(var i=0;i<records.length;i++) {
			idArray.push(records[i].get(idName)); 
		};
		
		return idArray;
	},
	/**
	 * 将record数据生成数组
	 * @param record: record对象
	 * @return 成功返回json对象，失败返回null
	 */
	getRecordArrayData: function(record) {
		if(null == record || undefined == record) {
			return null;
		}
		
		var recordArray = new Array(); 
		recordArray.push(record.data);
		
		//转换成json格式返回
		return Ext.encode(recordArray);
	},
	/**
	 * 表单提交保存数据
	 * @param form 表单
	 * @param url  后台保存地址
	 * @param params 参数，格式为{参数1: 值1, 参数2: 值2}
	 * @param successMsg 成功提示语
	 * @param failMsg 错误默认提示语
	 * @param onSuccessEvent 保存后成功执行方法
	 * @param onFailEvent	 保存后失败执行方法
	 * @return 无
	 */
	submitFormData: function(form, url, params, successMsg, failMsg, onSuccessEvent, onFailEvent) {
		var me = this;
		//提交表单内容到后台
		form.submit({
			scope: this,
			clientValidation : true,
			waitMsg : '正在保存，请稍候...',
			url : url,
			params: params,
			success : function(form, action) {
				if("" != successMsg) {
					me.showAlertBox(successMsg, Ext.Msg.INFO);
				}
				
				//执行保存成功后事件
				if(null != onSuccessEvent && undefined != onSuccessEvent) {
					onSuccessEvent(action.result);
				}
			},
			failure : function(form, action) {
				var msg = failMsg;
				if(undefined != action.result) {
					msg = action.result.msg;
				}
				me.showAlertBox(msg, null, 350, function() {
					//执行保存失败后事件
					if(null != onFailEvent && undefined != onFailEvent) {
						onFailEvent(action);
					}
				});
			}
		});
	},
	/**
	 * ajax方式提交保存数据
	 * @param url  后台保存地址
	 * @param params 参数，格式为{参数1: 值1, 参数2: 值2}
	 * @param successMsg 成功提示语
	 * @param failMsg 错误默认提示语
	 * @param onSuccessEvent 保存后成功执行方法
	 * @param onFailEvent	 保存后失败执行方法
	 * @return 无
	 */
	ajaxSubmitData: function(url, params, successMsg, failMsg, onSuccessEvent, onFailEvent) {
		var me = this;
		Ext.Ajax.request({
			async : false,
	        url: url,
	        params: params,
	        method: 'POST',
	        success: function (response, options) {
	        	//转码成json格式对象
	        	var result = Ext.JSON.decode(response.responseText);
	        	
	        	if(result.success) {
	        		//执行保存后成功事件
					if(null != onSuccessEvent && undefined != onSuccessEvent) {
						onSuccessEvent(result);
					}
					
					if (null != successMsg && undefined != successMsg)
						me.showAlertBox(successMsg, Ext.Msg.INFO, 300);
	        	} else {
	        		//执行保存后失败事件
					if(null != onFailEvent && undefined != onFailEvent) {
						onFailEvent(result);
					}
					
	        		me.showAlertBox(result.msg, null, 300);
	        	}
	        },
	        failure: function (response, options) {
	        	var msg = failMsg;
	        	try {
					if(undefined != action.result) {
						msg = action.result.msg;
					}
	        	} catch(e) {
	        	}
				
	        	//执行保存后失败事件
				if(null != onFailEvent && undefined != onFailEvent) {
					onFailEvent();
				}
				if (null != msg && undefined != msg)
					me.showAlertBox(msg, null, 300);
	        }
	    });
	},
	/**
	 * ajax方式请求
	 * @param url  后台地址
	 * @param params 参数，格式为{参数1: 值1, 参数2: 值2}
	 * @param onAfterRequest 执行请求后事件（请求成功才会执行）
	 * @return 无
	 */
	ajaxRequest: function(url, params, onAfterRequest) {
		Ext.Ajax.request({
			async : false,
			url: url,
        	params: params,
	        method: 'POST',
	        success: function (response, options) {
	        	var result = null;
	        	if(null != response.responseText && "" != response.responseText) {
	        		//转码成json格式对象
		        	result = Ext.JSON.decode(response.responseText);
	        	}
	        
	        	//执行请求后事件
	        	onAfterRequest(result, response.responseText);
	        }
	    });
	},
	/**
	 * ajax方式删除表格数据
	 * @param grid 表格
	 * @param idName id的名称
	 * @param url  后台删除地址
	 * @param dataName 要删除的数据名称
	 * @param params  参数，格式为{参数1: 值1, 参数2: 值2}
	 * @param onSuccessEvent 保存后成功执行方法
	 * @param onFailEvent	 保存后失败执行方法
	 * @return 无 
	 */
	ajaxDelGridData: function(grid, idName, url, dataName, params, onSuccessEvent, onFailEvent) {
		this.ajaxSwitchGridStatus(grid, idName, url, dataName, null, null, params, null, onSuccessEvent, onFailEvent);
	},
	/**
	 * ajax方式改变状态
	 * @param grid 表格
	 * @param idName id的名称
	 * @param url  后台删除地址
	 * @param dataName 要删除的数据名称
	 * @param status   将设置的状态 null：非设置状态; 0: 设置为禁用; 1: 设置为启用
	 * @param statusName 将设置的状态的字段名，如'status'
	 * @param params  参数，格式为{参数1: 值1, 参数2: 值2}
	 * @param msgInfo	提示信息
	 * @param onSuccessEvent 保存后成功执行方法
	 * @param onFailEvent	 保存后失败执行方法
	 * @return 无 
	 */
	ajaxSwitchGridStatus: function(grid, idName, url, dataName, status, statusName, params, msgInfo, onSuccessEvent, onFailEvent) {
		var me = this;
		var statusText = '删除';
		if(null != status) {
			if(null == msgInfo || undefined == msgInfo) {
				statusText = '禁用';
				if(1 == status) {
					statusText = '启用';
				}
				msgInfo = statusText + '多个' + dataName + '时，如果存在已经' 
					+ statusText + '的' + dataName + '将自动跳过。<br/>确定'+ statusText + '选中的' + dataName + '吗？';
			}
		} else {
			msgInfo = '删除后不可恢复，确定删除么？';
		}
		
		//检测表格选中行
		var records = me.checkGirdRowSelected(grid, '请至少选择一个' + dataName + '！');
		if(null == records) {
			return false;
		}
		
		var ids = new Array();
		//遍历获取选中行的id数组
		for(var i = 0; i < records.length; i++){
			//如果是启用/禁用，则要判断是否与当前状态一致
			if(null != status && status == records[i].get(statusName)) {
				continue;
			}
			ids.push(records[i].get(idName)); 
		}
		if(null == params || undefined == params) {
			params = {};
		}
		params.ids = ids;
		
		if(null != status) {//如果是启用/禁用
			if(0 == ids.length) {//判断要处理的数据是否为空
				me.showAlertBox('没有' + dataName + '可被' + statusText);
				return false;
			}
			params.flag = status;
		}
		
		Ext.MessageBox.confirm('系统提示', msgInfo, function(btn){
			if(btn=='yes'){
				me.showProgressBox('正在' + statusText + dataName + '，请稍候......');
				
				//提交删除数据到后台
				me.ajaxSubmitData(url, params, null, statusText + dataName + '失败！', function(result) {
					me.hideProgressBox();
					me.showAlertBox(result.msg, Ext.Msg.INFO);
					
					//刷新表格
					grid.getStore().load();
					
					//执行保存后成功事件
					if(null != onSuccessEvent && undefined != onSuccessEvent) {
						onSuccessEvent(result);
					}
				}, function(result) {
					me.hideProgressBox();
					
					//执行保存后失败事件
					if(null != onFailEvent && undefined != onFailEvent) {
						onFailEvent(result);
					}
				});
			}
		});
	},
	/**
	 * ajax方式删除表格数据
	 * @param grid 表格
	 * @param delInfo 删除信息
	 * @param id 要删除的数据的id
	 * @param url  后台删除地址
	 * @param params  参数，格式为{参数1: 值1, 参数2: 值2}
	 * @param onSuccessEvent 保存后成功执行方法
	 * @param onFailEvent	 保存后失败执行方法
	 * @return 无 
	 */
	ajaxDelSingleData: function(grid, delInfo, id, url, params, onSuccessEvent, onFailEvent) {
		var me = this;
		Ext.MessageBox.confirm('系统提示', '删除后不可恢复，确定删除' + delInfo + '么？',function(btn){
			if(btn=='yes'){
				me.showProgressBox('正在删除，请稍候......');
				
				if(null == params || undefined == params) {
					params = {};
				}
				params.ids = id;
				
				//提交删除数据到后台
				me.ajaxSubmitData(url, params, null, '删除' + delInfo + '失败！', function(result) {
					me.hideProgressBox();
					me.showAlertBox(result.msg, Ext.Msg.INFO);
					
					//刷新表格
					grid.getStore().load();
					
					//执行保存后成功事件
					if(null != onSuccessEvent && undefined != onSuccessEvent) {
						onSuccessEvent(result);
					}
				}, function(result) {
					me.hideProgressBox();
					
					//执行保存后失败事件
					if(null != onFailEvent && undefined != onFailEvent) {
						onFailEvent(result);
					}
				});
			};
		});
	},
	/**
	 * 跳转到URL
	 * @param url  后台导出地址
	 * @param params  参数，格式为{参数1: 值1, 参数2: 值2} 
	 * @param isNewWin 是否打开新窗口，true: 是; false: 否
	 */
	jumpToURL: function(url, params, isNewWin) {
		var ps = "";
		// 开始遍历
		for(var p in params){
			// 方法
			if(typeof(params[p])=="function"){
				continue;
			}
			
			ps += p + "=" + encodeURI(params[p]) + "&";
		}
		
		ps = ("" == ps ? "" : "?" + ps.substring(0, ps.length - 1));
		url += ps;
		
		if(null != isNewWin && undefined != isNewWin && isNewWin) {
			//新弹出一个窗口
			window.open(url);
		} else {
			location.href = url;
		}
	},
	/**
	 * 取得浏览器信息
	 * @return 浏览器信息对象，二个属性name和version
	 */
	getBrowser: function(){
	    var browser = {name: 'unknown', version: 0};
	    userAgent = window.navigator.userAgent.toLowerCase();
	    //IE,firefox,opera,chrome,netscape
	    if ( /(msie|trident|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test( userAgent ) ){
	        browser.name = RegExp.$1;
	        browser.version = RegExp.$2;
	    } else if ( /version\D+(\d[\d.]*).*safari/.test( userAgent ) ){ // safari
	        browser.name = 'safari';
	        browser.version = RegExp.$2;
	    }
	    
	    return browser;
	},
	/**
	 * 检测登录
	 * @return true: 已登录; false: 未登录
	 */
	checkSession: function() {
		var sessionOk = false;
		Ext.Ajax.request({
			async : false,
	        url: 'session.action',
	        method: 'POST',
	        success: function (response, options) {
	        	//转码成json格式对象
	        	var result = Ext.JSON.decode(response.responseText);
	        	
	        	if(null == result.map || null == result.map.loginUser) {
	        		return false;
	        	}
	        	
	        	sessionOk = true;
	        }
	    });
		
		return sessionOk;
	},
	/**
	 * 显示报表
	 * @param params  参数，格式为{参数1: 值1, 参数2: 值2} 
	 */
	showReport: function(params) {
		//检测登录
		if(!this.checkSession()) {
			this.showAlertBox("登录超时，请重新登录系统！", null, 300, function() {
				location.href = "login.html";
			});
			return false;
		}
		
		var $browser = this.getBrowser();
		if(('msie' != $browser.name || 'msie' == $browser.name && parseInt($browser.version) < 10) 
			&& 'trident' != $browser.name //IE11
			&& 'firefox' != $browser.name 
			&& 'opera' != $browser.name 
			&& 'chrome' != $browser.name) {
			this.showAlertBox("打印功能仅支持IE10及以上版本、Firefox、Opera、Chrome浏览器，请更换或升级浏览器！", null, 400);
			return;
		}
		
		this.jumpToURL('plugins/pdfjs/web/viewer.html', params, true);
	},
	/**
	 * 格式化对象属性中的字符串:
	 * 			 1. 将空值转换为空串
	 * 			 2. 去掉<span></span>包裹，只取中间的内容
	 * @param 	obj 源对象
	 * @return 转换后的对象
	 */
	formatString: function(obj) {
		var index;
		var index2;
		var len;
		for(var p in obj){
			// 方法
			if(typeof(obj[p])=="function" || Array.isArray(obj[p])){
				continue;
			}
			
			//空值时，转换为空串
			if(null == obj[p] || undefined == obj[p]) {
				obj[p] = "";
			} else if(typeof obj[p] === 'string') { 
				if(-1 != obj[p].indexOf("<span")) {
					index = obj[p].indexOf(">");
					if(-1 != index) {
						len = obj[p].length;
						index2 = obj[p].indexOf("</span>");
						if(-1 != index2) {
							len = index2;
						}
						obj[p] = obj[p].substring(index + 1, len);
					}
				}
			}
		}
		
		return obj;
	},
	/**
	 * 创建虚拟form，并将参数通过form提交到指定的后台url
	 * @param url 后台处理url
	 * @param params 参数，格式为{参数名1:参数值1,参数名2:参数值2}
	 */
	submitDummyForm: function(url, params) {
		//创建一个不可见form，用于提交数据
        if (!Ext.fly('frmDummy')) {
            var frm = document.createElement('form');
            frm.id = 'frmDummy';
            frm.name = 'frmDummy';
            frm.className = 'x-hidden';
            document.body.appendChild(frm);
        }
        
        //提交请求
        Ext.Ajax.request({
            disableCaching: true ,
            url: url,
            method: 'POST',
            isUpload: true,
            form: Ext.fly('frmDummy'),
            params: params
        });
	},
	/**
	 * 导出excel文件
	 * @param grid 要导出数据的grid或treegrid
	 * @param fileName	导出的excel文件名
	 * @param data		要导出的数据数组
	 * @param ignoreFields 需要忽略的字段数组
	 */
	exportGridExcelFile: function(grid, fileName, data, ignoreFields) {
        var cm = grid.columns;
        //如果只有一列，则判定为列根据后台数据加载所得，需要从columnManager中取得列
        if(cm.length <= 1) {
        	cm = grid.columnManager.columns;
        }
        //表头索引
        var headerIndex = [];
        //表头文字
        var headText = [];
    
        //获取表头的dataIndex和Text
        Ext.Array.forEach(cm, function(item){
        	if ((item.xtype == "gridcolumn" || item.xtype == "treecolumn") 
        		&& "&#160;" != item.text && "" != item.text) {
            	if(null != ignoreFields && undefined != ignoreFields) {//需要忽略字段
            		//包含在忽略字段列表中，则跳过
            		if(-1 != ignoreFields.indexOf(item.dataIndex)) {
            			//跳过本次循环
            			return;
            		}
            	} 

            	headerIndex.push(item.dataIndex);
                headText.push(item.text);
            }
        });

        this.submitDummyForm("excel/exportExcel.action", {
        	fileName: fileName,
        	headerIndex: Ext.JSON.encode(headerIndex),
        	headerText: Ext.JSON.encode(headText),
        	data: Ext.JSON.encode(data)
        });
	},
	/**
	 * 将grid数据导出excel文件
	 * @param grid 要导出数据的grid
	 * @param fileName	导出的excel文件名
	 * @param ignoreFields 需要忽略的字段数组
	 */
	exportExcelFile: function(grid, fileName, ignoreFields) {
		//封装表格数据
        var data = [];
        var store = grid.getStore();
        var d;
        store.each(function(record){
        	//格式化数据
        	d = this.formatString(record.data);
            data.push(d);
        }, this);
        
        this.exportGridExcelFile(grid, fileName, data, ignoreFields);
	},
	/**
	 * 从结点中取得数据
	 * @param node 结点
	 * @param data 数据数组，返回值
	 */
	getDataFromNode: function(node, data) {
		//遍历孩子
		node.eachChild(function(child){
        	data.push(this.formatString(child.data));
        	
        	this.getDataFromNode(child, data);
		}, this);
	},
	/**
	 * 将treegrid数据导出excel文件
	 * @param treegrid 要导出数据的treegrid
	 * @param fileName	导出的excel文件名
	 * @param ignoreFields 需要忽略的字段数组
	 */
	exportTreeGridExcelFile: function(treegrid, fileName, ignoreFields) {
        //封装表格数据
        var data = [];
        var store = treegrid.getStore();
        
        rootNode = store.getRootNode();
        //从根结点及其下所有子孙结点中取得数据
        this.getDataFromNode(rootNode, data);

        this.exportGridExcelFile(treegrid, fileName, data, ignoreFields);
	},
	/**
	 * 导入Excel
	 * @param app		application
	 * @param url		导入后台响应地址
	 * @param itemName	当前导入的项目名称
	 * @param parentStore	父窗体的store
	 * @param onAfterImport	导入后执行事件
	 * @param params  参数，格式为{参数1: 值1, 参数2: 值2} 
	 */
	importExcelFile: function(app, url, itemName, parentStore, onAfterImport, params) {
		//加载excel导入控制器
        this.loadController(app, "common.ExcelImportCtl");
		//取得excel导入window
		var win = ACBEE.Ext.Util.getWin('excelimportview');
		win.setTitle('导入' + itemName);
		win.url = url;
		win.itemName = itemName;
		//保存父窗体表格store
		win.parentStore = parentStore;
		//保存导入后执行事件
		win.onAfterImport = onAfterImport;
		//保存参数
		win.params = params;
		win.show();
	},
	/**
	 * 创建grid的actionColoum
	 * @param btns  按钮名称数组，如['edit', 'delete']
	 * @return 类型为actioncolumn的对象
	 */
	createEditBtn: function(btns) {
		var ac = {
			xtype: 'actioncolumn',  
			text: '操作',  
	        width: 100,  
	        tdCls: 'action',  
	        style :"text-align:center",
	        align:'center',
	        items: []
		};
		
		if(null == btns || btns.length <= 0) {
			return ac;
		}
	
		//按钮名数组
		var btnNames = ['edit', 'delete', 'detail', 'grantAuthor', 'assignUser', 'assignRole', 'viewAuthor', 
		                'checkNumber', 'tasking', 'grounding', 'offShelves', 'transfer'];
		//按钮文字数组
		var btnTexts = ['编辑', '删除', '详情', '赋权', '分配用户', '分配角色', '查看权限', 
		                '核实数量', '任务分配', '上架', '下架', '调拨'];
		
		var btnLength = 0;
		var index = -1;
		for(var i = 0; i < btns.length; i++) {
			//取得按钮索引
			index = btnNames.indexOf(btns[i]);
			if(-1 == index) {
				continue;
			}
			//添加图片按钮
			ac.items.push({
				iconCls:'btn-' + btns[i],
	            tooltip: btnTexts[index]
			});
			//不是最后一个，则添加间隔
			if(i != btns.length - 1) {
				ac.items.push({});
			};
			btnLength++;
		}
		
		ac.width = btnLength * 32; 
	
		return ac;
	},
	/**
	 * 根据用户权限加载功能按钮
	 * @param view	视图对象，如panel,window等
	 * @param functionCodes  功能按钮名称数组，如['edit', 'delete']
	 * @return 无
	 */
	loadFunctionBtns: function(view, functionCodes) {
		//获取panel下的所有按钮
    	var btns = view.query('button');
    	var btnName = '';
    	var codeIndex = -1;
    	for(var index in btns) {
    		//取得当前按钮的名称
    		btnName = btns[index].name;
    		if(undefined != btnName) {
    			//前缀非定义的按钮名称，则跳过
    			if('btn-' != btnName.substring(0,4)) {
    				continue;
    			}
    		
    			//去掉前缀，得到按钮名
    			btnName = btnName.substring(4, btnName.length);
    			
    			//判断是否有权限按钮
    			codeIndex = functionCodes.indexOf(btnName);
    			if(-1 == codeIndex) {
    				btns[index].hide();
    			} else {
    				btns[index].show();
    			}
    		}
    	}
	},
	/**
	 * 设置父容器下控件状态
	 * @param panel			父容器
	 * @param disableFlag	状态 true:设置为不可编辑；false:设置为可编辑
	 * @param fieldStyle	编辑框的样式
	 */
	setCompomentStatus: function(panel, disableFlag, fieldStyle) {
		var me = this;
		panel.items.each(function(item, index, length){                           
			if(item.xtype == "panel" || item.xtype == "fieldset") {
				me.setCompomentStatus(item, disableFlag, fieldStyle);
			} else {
				if(item.xtype != "label") {
					item.setFieldStyle(fieldStyle);
					
					//下拉框
					if(item.xtype == "combobox") {
						item.setEditable(false);
						item.hideTrigger = disableFlag;
						
						//将状态保存到this中
						//要不在onTriggerClick中读取到的disableFlag永远是第一次的值
						this.disableFlag = disableFlag;
						//指定下拉框触发事件
						item.onTriggerClick = function(event){
							//设置为不可编辑时，不弹出下拉列表
							if(this.disableFlag) {
								return;
							}
							
							/**
							 * 以下代码复用combox的onTriggerClick方法中内容
							 */
							var me = this;
					        if (!me.readOnly && !me.disabled) {
					            if (me.isExpanded) {
					                me.collapse();
					            } else {
					                me.onFocus({});
					                if (me.triggerAction === 'all') {
					                    me.doQuery(me.allQuery, true);
					                } else if (me.triggerAction === 'last') {
					                    me.doQuery(me.lastQuery, true);
					                } else {
					                    me.doQuery(me.getRawValue(), false, true);
					                }
					            }
					            me.inputEl.focus();
					        }
						};
					} else {//非下拉框
						item.setReadOnly(disableFlag);
					}
				}
			}
		});
	},
	/**
	 * 禁用/启用form下的所有组件
	 * @param btns			按钮数组，如果disableFlag=true，则隐藏按钮，否则显示按钮
	 * @param form			表单
	 * @param disableFlag	状态 true:设置为不可编辑；false:设置为可编辑
	 */
	disableCompoment: function(btns, form, disableFlag){
		//显示/隐藏按钮
		if(btns !=null){
			for(var i = 0; i < btns.length; i++){
				if(disableFlag) {
					btns[i].hide();
				} else {
					btns[i].show();
				}
			}
		}
		//根据状态不同，取得编辑框样式
		var fieldStyle = (disableFlag == true ? 'background-color:rgb(244,244,244);' : 'background-color:rgb(255,255,255);');
		
		//设置form下的控件状态
		this.setCompomentStatus(form, disableFlag, fieldStyle);
	 },
	 /**
	  * 从Store中取得特定属性值
	  * @param store	目标store
	  * @param idName	要查找的id名称
	  * @param idValue	要查找的id值
	  * @param defaultText 未找到时的默认值
	  * @param propertyName 要获取的属性名称
	  * @return 属性值
	  */
	 getPropertyFromStore: function(store, idName, idValue, defaultText, propertyName) {
		 //在store中查找id
		 var index = store.find(idName, idValue);
		 if(-1 == index) {
			 return defaultText;
		 }
		 var r = store.getAt(index);
		 
		 if(undefined == r) {
			 return defaultText;
		 }
		 var p = {};
		 p[propertyName] = r.get(propertyName);
		 p = this.formatString(p);
        
		 return (null == p[propertyName] || undefined == p[propertyName] || "" == p[propertyName]+"") ? defaultText : p[propertyName];
	},
	/**
	 * 格式化下拉框显示项
	 * @param displayField 列表显示项
	 * @param ellipsisLen 截断的字符长度
	 * @return 格式化后的显示项
	 */
	formatComboxTpl: function(displayField, ellipsisLen, onlyChar) {
		var len = ellipsisLen;
		if(undefined == onlyChar || null == onlyChar ) {
			len = len * 2;
		}
		
		return '<div data-qtip="{' + displayField 
			+ '}"><tpl if="Ext.util.Format.lenB(' + displayField 
			+ ') &gt; ' + len
			+ '">{' + displayField + ':ellipsis(' + ellipsisLen
			+ ')}<tpl else>{' + displayField + '}</tpl></div>';
	}
};