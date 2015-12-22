/**
 * 主界面controller.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.controller.menu.MainCtrl', {
	extend: 'Ext.app.Controller',
	views: [
	    'main.HeaderView',
	    'main.ModifyPwdView',
	    'main.HelpView',
	    'main.ContactView',
	    'main.AboutView'
	    
	],
	init: function() {
		this.control({
			//主界面头部界面事件
			'headerview':{
				afterrender: this.onAfterRender
			},
			//修改密码窗口保存按钮
			'modifypwdview button[action=save]': {
				click: this.onSavePwd
			},
			//帮助按钮
			'helpview': {
				click: this.onClick
			}
		});
	},
	/**
	 * 主界面头部渲染后事件
	 */
	onAfterRender: function(panel, eOpts) {
		//取得登录信息
		this.getSessionInfo();
		
		//开关头部事件
		this.onSwitchHeader(panel);
		
		//绑定修改密码事件
		this.onModifyPwd(panel);
		
		//绑定注销事件
		this.onLogout(panel);
		//绑定帮助事件
		this.onHelp(panel);
	},
	onClick: function(menu, item, e, eOpts){
		if(item.url != 1 && item.url != 2){
			window.open(item.url,"_blank");
		} else if(item.id == 1){
			//显示联系我们window
			var win = ACBEE.Ext.Util.getWin('contactview').show();
		} else {
			//显示关于window
			var win = ACBEE.Ext.Util.getWin('aboutview').show();
		}
	},
	//取得登录信息
	getSessionInfo: function() {
		Ext.Ajax.request({
			async : false,
	        url: '/ExtJsMVC/user/session.action',
	        method: 'POST',
	        success: function (response, options) {
	        	//转码成json格式对象
	        	var result = Ext.JSON.decode(response.responseText);
	        	//log(result);
	        	if(null == result.loginUser) {
	        		location.href = "login.html";
	        		return false;
	        	}
	        	//保存登录用户id
	        	ACBEE.Ext.Util.loginUserId = result.loginUser.user_pk;
	        	//保存登录的用户姓名
	        	ACBEE.Ext.Util.loginUserName = Ext.String.trim(result.loginUser.user_name);
	        	
	        	//取得欢迎文字对象，根据登录用户信息设置欢迎文字
	        	var msgLabel = Ext.getCmp("welcomemsg"); 
	    		if (msgLabel) { 
	    			msgLabel.setText('欢迎您， ' + result.loginUser.fk_roles_pk + ' '
	    				+ result.loginUser.user_number + '(' + result.loginUser.user_name + ')');
	    		}
	        }
	    });
	},
	/**
	 * 开关头部处理方法
	 */
	onSwitchHeader: function(panel) {
		//取得头部开关图片
		var switchHeaderImg = panel.down('image[name=header_switch]');
		/**
		 * 添加头部开关图片单击事件
		 */
		Ext.fly(switchHeaderImg.el).on('click', function(e, t) {
			//取得logo、注销等按钮面板、用户信息面板对象
			var headerLogo = panel.down('image[name=header_logo]');
			var headerLogoutpanel = panel.down('panel[name=header_logoutpanel]');
			var headerUserpanel = panel.down('panel[name=header_userpanel]');
			
			//取得开关图片的dom
			var dom = Ext.get(e.target).dom;
			if(panel.getHeight() <= 23) {
				dom.title = '关闭',
				switchHeaderImg.setSrc('images/header/switchclose.png');
				panel.setHeight(80);
				
				//显示logo、注销等按钮面板、用户信息面板
				headerLogo.show();
				headerLogoutpanel.show();
				headerUserpanel.show();
			} else {
				dom.title = '打开',
				switchHeaderImg.setSrc('images/header/switchopen.png');
				panel.setHeight(23);
				
				//隐藏logo、注销等按钮面板、用户信息面板
				headerLogo.hide();
				headerLogoutpanel.hide();
				headerUserpanel.hide();
			}
        });
		
		/**
		 * 添加头部头部开关图片鼠标移上事件
		 */
		Ext.fly(switchHeaderImg.el).on('mouseenter', function(e, t) {
			if(panel.getHeight() <= 23) {
				switchHeaderImg.setSrc('images/header/switchopen_on.png');
			} else {
				switchHeaderImg.setSrc('images/header/switchclose_on.png');
			}
		});
		
		/**
		 * 添加头部开关图片鼠标离开事件
		 */
		Ext.fly(switchHeaderImg.el).on('mouseleave', function(e, t) {
			if(panel.getHeight() <= 23) {
				switchHeaderImg.setSrc('images/header/switchopen.png');
			} else {
				switchHeaderImg.setSrc('images/header/switchclose.png');
			}
		});
		
		/**
		 * 添加头部开关图片鼠标按下事件
		 */
		Ext.fly(switchHeaderImg.el).on('mousedown', function(e, t) {
			if(panel.getHeight() <= 23) {
				switchHeaderImg.setSrc('images/header/switchopen_down.png');
			} else {
				switchHeaderImg.setSrc('images/header/switchclose_down.png');
			}
		});
		
		/**
		 * 添加头部开关图片鼠标抬起事件
		 */
		Ext.fly(switchHeaderImg.el).on('mouseup', function(e, t) {
			if(panel.getHeight() <= 23) {
				switchHeaderImg.setSrc('images/header/switchopen.png');
			} else {
				switchHeaderImg.setSrc('images/header/switchclose.png');
			}
		});
	},
	//修改密码处理方法
	onModifyPwd: function(panel) {
		//取得头部修改密码图片
		var modifypwdImg = panel.down('image[name=modifypwd]');
		/**
		 * 添加头部修改密码图片单击事件
		 */
		Ext.fly(modifypwdImg.el).on('click', function(e, t) {
			//显示修改密码window
			var win = ACBEE.Ext.Util.getWin('modifypwdview').show();
			var form = win.down('form');
			form.getForm().reset();
        });
		
		/**
		 * 添加头部修改密码图片鼠标移上事件
		 */
		Ext.fly(modifypwdImg.el).on('mouseenter', function(e, t) {
			modifypwdImg.setSrc('images/header/modifypwdbg_on.png');
		});
		
		/**
		 * 添加头部修改密码图片鼠标离开事件
		 */
		Ext.fly(modifypwdImg.el).on('mouseleave', function(e, t) {
			modifypwdImg.setSrc('images/header/modifypwdbg.png');
		});
		
		/**
		 * 添加头部修改密码图片鼠标按下事件
		 */
		Ext.fly(modifypwdImg.el).on('mousedown', function(e, t) {
			modifypwdImg.setSrc('images/header/modifypwdbg_down.png');
		});
		
		/**
		 * 添加头部修改密码图片鼠标抬起事件
		 */
		Ext.fly(modifypwdImg.el).on('mouseup', function(e, t) {
			modifypwdImg.setSrc('images/header/modifypwdbg.png');
		});
	},
	//注销处理方法
	onLogout: function(panel) {
		//取得头部注销图片
		var logoutImg = panel.down('image[name=logout]');
		/**
		 * 添加头部注销图片单击事件
		 */
		Ext.fly(logoutImg.el).on('click', function(e, t) {
			Ext.Msg.confirm("系统提示", "确定退出系统吗？", function(btn) {
				if("yes" == btn) {	//点击了“是”按钮
					Ext.getBody().mask('正在退出系统...');
					
					//后台退出处理
					Ext.Ajax.request({
						async : false,
				        url: 'logout.action',
				        method: 'POST',
				        success: function (response, options) {
				        	//跳转到登录页面
							location.href = "login.html";
				        },
				        failure: function (response, options) {
				        	Ext.Msg.show({
								width : 150,
								title : "错误",
								msg : "注销时发生错误，请重试！",
								buttons : Ext.Msg.OK,
								icon: Ext.Msg.ERROR
							});
				        }
				    });
				}
			});
        });
		
		/**
		 * 添加头部注销图片鼠标移上事件
		 */
		Ext.fly(logoutImg.el).on('mouseenter', function(e, t) {
			logoutImg.setSrc('images/header/logoutbg_on.png');
		});
		
		/**
		 * 添加头部注销图片鼠标离开事件
		 */
		Ext.fly(logoutImg.el).on('mouseleave', function(e, t) {
			logoutImg.setSrc('images/header/logoutbg.png');
		});
		
		/**
		 * 添加头部注销图片鼠标按下事件
		 */
		Ext.fly(logoutImg.el).on('mousedown', function(e, t) {
			logoutImg.setSrc('images/header/logoutbg_down.png');
		});
		
		/**
		 * 添加头部注销图片鼠标抬起事件
		 */
		Ext.fly(logoutImg.el).on('mouseup', function(e, t) {
			logoutImg.setSrc('images/header/logoutbg.png');
		});
	},
	//帮助处理方法
	onHelp: function(panel) {
		//取得头部帮助图片
		var helpImg = panel.down('image[name=help]');
		/**
		 * 添加头部帮助图片单击事件
		 */
		Ext.fly(helpImg.el).on('click', function(e, t) {
			//显示帮助menu
			var win = ACBEE.Ext.Util.getWin('helpview');
			win.showAt(helpImg.getX(),helpImg.getY()+24);
        });
		/**
		 * 添加头部帮助图片鼠标移上事件
		 */
		Ext.fly(helpImg.el).on('mouseenter', function(e, t) {
			helpImg.setSrc('images/header/helpbg_on.png');
		});
		
		/**
		 * 添加头部帮助图片鼠标离开事件
		 */
		Ext.fly(helpImg.el).on('mouseleave', function(e, t) {
			helpImg.setSrc('images/header/helpbg.png');
		});
		
		/**
		 * 添加头部帮助图片鼠标按下事件
		 */
		Ext.fly(helpImg.el).on('mousedown', function(e, t) {
			helpImg.setSrc('images/header/helpbg_down.png');
		});
		
		/**
		 * 添加头部帮助图片鼠标抬起事件
		 */
		Ext.fly(helpImg.el).on('mouseup', function(e, t) {
			helpImg.setSrc('images/header/helpbg.png');
		});
	},
	//修改密码窗口保存按钮处理方法
	onSavePwd: function(button) {
		var win = button.up('window');
		//取得表单对象
		var form = win.down('form');
		
		//验证表单
		if(!form.isValid()){//表单有错误
			return false;
		}
		
		form.submit({
			scope: this,
			clientValidation : true,
			waitMsg : '正在修改密码，请稍候...',
			url : 'modifypwd.action',
			success : function(form, action) {
				Ext.Msg.show({
					width : 150,
					title : "系统提示",
					msg : "修改密码成功",
					buttons : Ext.Msg.OK,
					icon: Ext.Msg.INFO
				});
				win.close();
			},
			failure : function(form, action) {
				Ext.Msg.show({
					width : 150,
					title : "系统提示",
					msg : action.result.msg,
					buttons : Ext.Msg.OK,
					icon: Ext.Msg.WARNING
				});
			}
		});
	}
});