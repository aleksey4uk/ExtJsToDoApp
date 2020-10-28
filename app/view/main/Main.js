Ext.define('view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'side-navigation-tabs',

    minTabWidth: 200,

    controller: 'MainController',
    ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0,
    tabBar: {
        // turn off borders for classic theme.  neptune and crisp don't need this
        // because they are borderless by default
        border: false
    },

    defaults: {
        textAlign: 'left',
        // bodyPadding: 15,
    },

    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        cls: 'classic',
        weight : 50,
        items: [{
            xtype: 'button',
            text: 'hello',
            cls: 'customButton',
            listeners: {
                click: 'showAlert'
            }
        }]
    }],

    items: [{
        title: 'Home',
        html: '<h1>Home Page</h1>'
    }, {
        title: 'Users',
        html: '<h1>Users Page</h1>'
    }, {
        title: 'Todo',
        xtype: 'todo-grid'
    }, {
        title: 'Settings',
        html: '<h1>Settings</h1>'
    }]
});