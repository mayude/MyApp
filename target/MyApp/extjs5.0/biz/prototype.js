/**
 * prototype.js
 * 基本于js，对js的一些对象进行扩展
 */

/**
 * 扩展日期对象
 */
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(),    //day
		"h+" : this.getHours(),   //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
		"S" : this.getMilliseconds() //millisecond
	};
	
	if(/(y+)/.test(format)) 
		format = format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(format))
			format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
	
	return format;
};

/**
 * 扩展数组对象
 */
if (!Array.prototype.indexOf) Array.prototype.indexOf = function(item, i){
	i || (i = 0); //初始化起步查询的下标
	var length = this.length;
	if (i < 0) i = length + i; // 如i为负数，则从数组末端开始。
	for (; i < length; i++)
		if (this[i] === item) return i;
	return -1;
};