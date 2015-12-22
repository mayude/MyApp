Ext.define('QH.store.Users', {
    extend: 'Ext.data.Store',
    model: 'QH.model.User',
    autoLoad: true,
    
    //proxy: {
    //    type: 'ajax',
    //    api: {
    //        // These are static JSON files that never change. In a real system
    //        // they will normally point to a page that gets processed on the server.
    //        read: 'data/users.json',
    //        update: 'data/updateUsers.json'
    //    },
    //    reader: {
    //        type: 'json',
    //        root: 'users',
    //        successProperty: 'success'
    //    }
    //}
    	proxy: {
            type: 'ajax',
            url:'/MyApp/user/list.action',
            reader: {
                type: 'json',
                rootProperty:'rows',
                successProperty: 'success'
            }
        }
});