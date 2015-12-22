/**
 * 主界面帮助view.
 * @author 马玉德
 * @version 1.0.0, 2015-10-20
 */
Ext.define('QH.view.main.HelpView',{
	extend: 'Ext.menu.Menu',
	alias: 'widget.helpview',
	id: 'helpview',
    items: [{
        text: '客户服务',
        icon: 'images/header/customerserver.png',
        id:'khfw',
        url : "http://acbee.com/templates/T_second/index.aspx?nodeid=336"
    },{
        text: '视频教程',
      	icon: 'images/header/video.png',
        id:'spjc',
        url : 'http://acbee.com/templates/T_second/index.aspx?nodeid=337'
    },{
        text: '帮助中心',
        icon: 'images/header/productcenter.png',
        id:'bzzx',
        url : 'http://acbee.com/templates/T_second/index.aspx?nodeid=331'
    },{
        text: '产品官网',
        icon: 'images/header/customerserver.png',
        id:'cpgw',
        url : 'http://acbee.com'
    },{
        text: '建议期望',
        icon: 'images/header/subgester.png',
        id:'jyqw',
        url : 'http://acbee.com/templates/T_second/index.aspx?nodeid=338'
    },{
        text: '联系我们',
        icon: 'images/header/contact.png',
        id:'lxwm',
        url : '1'
    },{
        text: '关于',
        icon: 'images/header/about.png',
        id:'gy',
        url : '2'
    }]
});