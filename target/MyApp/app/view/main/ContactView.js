/**
 * 联系我们view.
 * @author 马玉德
 * @version 1.0.0, 2015-07-07
 */
Ext.define('QH.view.main.ContactView',{
	extend: 'Ext.window.Window',
	alias: 'widget.contactview',
	id: 'contactview',
	title: '联系我们',
	resizable : false,
	closeAction : 'hide',
	width : 523,
	height : 310,
	bodyStyle: 'background: url(images/header/contactus.png) no-repeat;'
});