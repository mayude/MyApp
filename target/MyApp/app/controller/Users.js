Ext.define('QH.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [
        'Users@QH.store'
        //'HT.store.Users'
    ],

    models: [
        //'User@HT.model'
        'QH.model.User'
    ],

    views: [
        //'Edit@HT.view.user',
        //'List@HT.view.user'
        'QH.view.user.Edit',
        'QH.view.user.List'
    ],

    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('QH.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});
