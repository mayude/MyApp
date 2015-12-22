/**
 * Created by myd on 15/10/21.
 */
Ext.define('QH.store.base.StaffStore',{
    extend:'Ext.data.Store',
    requires:'QH.model.base.StaffModel',
    model:'QH.model.base.StaffModel',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'/MyApp/staff/list.action',
        reader:{
            type:'json',
            rootProperty:'rows',
            successProperty: 'success'
        }
    }
});