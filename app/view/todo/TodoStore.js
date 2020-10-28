Ext.define('MyApp.view.todo.TodoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.TodoStore',
    model: Ext.create('MyApp.view.todo.TodoModel'),

    data: [{
        text: 'Build the coffee',
    }, {
        text: 'Create ToDo application ',
    }, {
        text: 'Praise yourself',
    }],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});