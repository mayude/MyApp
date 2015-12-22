/**
 * 自定义vtype
 */
Ext.apply(Ext.form.VTypes, {
	/**
     * 只限制字符长度
     * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
     */
    limitLen:  function(val, field){
    	//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		return true;
    },
	/**
	 * 除数字外允许其它字符
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
	exceptNumber: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//字符不允许包含数字
		if(!this.exeReg(val, /^((?!\d).)*$/)) {
			return false;
		}
		
        return true;  
    },
    //键盘输入时不允许输入数字
    exceptNumberMask: /^((?!\d).)*$/i,
    /**
	 * 除中文外允许其它字符
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    exceptChinese: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//字符只允许包含中文
		if(!this.exeReg(val, /^((?![\u4e00-\u9fa5]).)*$/)) {
			return false;
		}
		
        return true;  
    },
	//键盘输入时不允许输入中文
    exceptChineseMask: /^((?![\u4e00-\u9fa5]).)*$/i,
    /**
	 * 只允许中英文
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    chnEng: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//字符只允许包含中英文  
		if(!this.exeReg(val,  /^[A-Za-z\u4e00-\u9fa5]*$/)) {
			return false;
		}
		
        return true;  
    },
    //键盘输入时只允许输入中英文
    chnEngMask: /^[A-Za-z\u4e00-\u9fa5]*$/i,
    /**
	 * 只允许数字
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    number: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//字符只包含数字
		if(!this.exeReg(val,  /^\d+$/)) {
			return false;
		}
		
        return true;  
    },
    //键盘输入时只允许输入数字
    numberMask: /^\d+$/i,
    /**
	 * 货币，即小数
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 *			decimalDigits: 允许的小数点后位数
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    currency: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//字符只包含数字和.,且.不能在开头和结尾
		if(!this.exeReg(val, /^\d+(\.\d+)?$/)) {
			return false;
		}
		
		//验证小数点位数
		if(undefined != field.decimalDigits && null != field.decimalDigits) {
			//取得小数点位置
			var index = val.indexOf('.');
			//小数点存在，则验证
			if(-1 != index) {
				//取得小数位数
				var decimalLen = this.lenB(val) - (index + 1);
				//小数位数大于允许的位数，则不允许
				if(decimalLen > field.decimalDigits) {
					return false;
				}
			}
		}
		
        return true;  
    },
    //键盘输入时只允许输入数字和.
    //currencyMask: /^\d+(\.\d+)?$/i,
    /**
	 * 电话号码
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    phone: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//字符只包含数字和.
		if(!this.exeReg(val, /^[0-9]+((-[0-9]+)?)+((,|，|\/){1}[0-9]+((-[0-9]+)?)+)*$/)) {
			return false;
		}
		
        return true;  
    },
    //键盘输入时只允许输入数字和.
   // phoneMask: /^[0-9]+((-[0-9]+)?)+((,|，|\/){1}[0-9]+((-[0-9]+)?)+)*$/i,
    /**
	 * 日期
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * 			compareTo: 比较的日期组件名，一般为开始日期组件名，此属性只出现在结束日期组件中
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    date: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//支持格式: YYYY-MM-DD
		if(!this.exeReg(val, /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/)) {
			return false;
		}
		
		//开始日期
		var bValue = "";
		//结束日期
		var eValue = "";
		//是否需要比较
		var bToCompare = false;
		//开始日期框
		var bField;
		//结束日期框
		var eField;
		//需要与开始日期比较
		if(undefined != field.compareTo && null != field.compareTo) {
			//取得要比较的控件
			var compareField = field.ownerCt.down('datefield[name=' + field.compareTo + ']');
			if(undefined != compareField && null != compareField) {
				//取得开始日期时间值
				bValue = compareField.getValue();
				if(null == bValue || undefined == bValue || '' == bValue) {
					return true;
				}
				
				try {
					bValue = bValue.format('yyyy-MM-dd');
				} catch (e) {
				}
				//结束日期
				eValue = val;
				bField = compareField;
				eField = field;
				bToCompare = true;
			}
		} else {
			//取得结束日期框
			var compareField = field.ownerCt.down('datefield[compareTo=' + field.name + ']');
			if(undefined != compareField && null != compareField) {
				var eValue = compareField.getValue();
				if(null == eValue || undefined == eValue || '' == eValue) {
					return true;
				}
				
				try {
					eValue = eValue.format('yyyy-MM-dd');
				} catch (e) {
				}
				//开始日期
				bValue = val;
				bField = field;
				eField = compareField;
				bToCompare = true;
			}
		}
		
		if(bToCompare) {
			//结束日期(eValue)不应小于开始日期(bValue)
			if(10 == bValue.length && 10 == eValue.length && eValue < bValue){
				return false;
			}
			
			if(undefined != bField.activeError && -1 == bField.activeError.indexOf('Y-m-d')) {
				bField.clearInvalid();
			}
			if(undefined != eField.activeError && -1 == eField.activeError.indexOf('Y-m-d')) {
				eField.clearInvalid();
			}
		}
		
        return true;  
    },
    /**
	 * 日期时间
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * 			compareTo: 比较的日期时间组件名，一般为开始日期时间组件名，此属性只出现在结束日期时间组件中
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    datetime: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}

		//支持格式: YYYY-MM-DD HH:mm:ss
		if(!this.exeReg(val, /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)(\\s(((0?[0-9])|([1][0-9])|([2][0-4]))\\:([0-5]?[0-9])((\\s)|(\\:([0-5]?[0-9])))))/)) {
			return false;
		}

		//开始时间
		var bValue = "";
		//结束时间
		var eValue = "";
		//是否需要比较
		var bToCompare = false;
		//开始时间框
		var bField;
		//结束时间框
		var eField;
		//需要与开始时间比较
		if(undefined != field.compareTo && null != field.compareTo) {
			var compareToXType = 'datetimefield';
			if(field.compareToDate) {
				compareToXType = 'datefield';
			}
			//取得要比较的控件
			var compareField = field.ownerCt.down(compareToXType + '[name=' + field.compareTo + ']');
			if(undefined != compareField && null != compareField) {
				//取得开始日期时间值
				bValue = compareField.getValue();
				if(null == bValue || undefined == bValue || '' == bValue) {
					return true;
				}
				
				try {
					bValue = bValue.format('yyyy-MM-dd hh:mm:ss');
				} catch (e) {
				}
				//结束日期
				eValue = val;
				bField = compareField;
				eField = field;
				bToCompare = true;
			}
		} else {
			//取得结束时间框
			var compareField = field.ownerCt.down('datetimefield[compareTo=' + field.name + ']');
			if(undefined != compareField && null != compareField) {
				var eValue = compareField.getValue();
				if(null == eValue || undefined == eValue || '' == eValue) {
					return true;
				}
				
				try {
					eValue = eValue.format('yyyy-MM-dd hh:mm:ss');
				} catch (e) {
				}
				//开始时间
				bValue = val;
				bField = field;
				eField = compareField;
				bToCompare = true;
			}
		}
		
		if(bToCompare) {
			//结束时间(eValue)不应小于开始时间(bValue)
			if(19 == bValue.length && 19 == eValue.length && eValue < bValue){
				return false;
			}

			if(undefined != bField.activeError && -1 == bField.activeError.indexOf('Y-m-d')) {
				bField.clearInvalid();
			}
			if(undefined != eField.activeError && -1 == eField.activeError.indexOf('Y-m-d')) {
				eField.clearInvalid();
			}
		}
		
        return true;  
    },
    /**
	 * 密码
	 * 组件属性：
	 * 			length: 允许输入的字符总长度
	 * 			compareTo: 比较的密码组件名，一般为上一个密码组件名，此属性只出现在后一个密码组件中
	 * @param val 	 输入值
     * @param field  文本框组件
     * @return true: 验证通过; false: 验证失败
	 */
    password: function(val, field){
		//验证字符长度
		if(!this.checkLength(val, field.length)) {
			return false;
		}
		
		//需要与前一个密码比较
		if(undefined != field.compareTo && null != field.compareTo) {
			//取得要比较的控件
			var compareField = field.ownerCt.down('textfield[name=' + field.compareTo + ']');
			if(undefined != compareField && null != compareField) {
				//取得上一个密码值
				var compareFieldValue = compareField.getValue();
				
				//二个密码不一致
				if(val != compareFieldValue){
					return false;
				}
			}
		}
		
        return true;  
    },
    /**
     * 验证字符长度
     * @param val 	 输入值
     * @param length 允许的长度（字节长度）
     * @return true: 字符长度符合; false: 字符长度超过
     */
    checkLength: function(val, length) {
    	if(undefined != length && null != length) {
    		//取得字节长度
			var len = this.lenB(val);
			
			if(len > length) {
				return false;
			} else {
				return true;
			}
		}
    	
		return true;
    },
    /**
     * 取得字符的字节长度
     * @param str 字符串
     * @return 字符的字节长度
     */
    lenB : function(str){
    	return str.replace(/[^\x00-\xff]/g,"**").length;
    },
    /**
     * 执行正则表达式
     * @param op 操作字符
     * @param reg 正则表达式
     * @return true: 匹配; false: 不匹配
     */
    exeReg : function(op, reg){
		return new RegExp(reg).test(op);
	}
});