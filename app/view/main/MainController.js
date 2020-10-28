Ext.define('view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MainController',

    showAlert: function(...params) {
        Ext.Msg.alert('Status', 'Changes saved successfully.');
    }
})