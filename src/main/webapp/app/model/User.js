Ext.define('QH.model.User', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['user_pk', 'user_number', 'user_name','user_password','fk_roles_pk','user_sex','user_birthday','fk_station_pk','user_intime','user_phone','user_email']
});
