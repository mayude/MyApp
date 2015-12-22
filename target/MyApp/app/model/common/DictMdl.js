/**
 * 数据字典model.
 * @author 苏亚欣
 * @version 1.0.0, 2015-07-16
 */
Ext.define('QH.model.common.DictMdl', {
	extend: 'Ext.data.Model', 
	fields:  ['dictId',	'dictName',	'dictType',{
  		name:'displayStatus',
  		convert:function(value, record){
  			var v = record.raw.status;
  			if(null == v)
  				return '<span class="red">未知</span>';
  			else if(1 == v)
  				return '<span class="blue">启用</span>';
  			else 
  				return '<span class="red">禁用</span>';
  		},
  		mapping:'displayStatus'
  	},'status','dictOrder']
});