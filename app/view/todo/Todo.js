Ext.define('MyApp.view.todo.Todo', {
    extend: 'Ext.grid.Panel',
    xtype: 'todo-grid',
    controller: 'TodoController',
    store: Ext.create('MyApp.view.todo.TodoStore'),

    viewConfig: {
        enableTextSelection: true
    },
    
    dockedItems: [{
        dock: 'top',
        xtype: 'form',
        cls: 'classic',
        layout: 'hbox',
        weight : 50,
        margin: 10,
        items: [{
            reference: 'todoTextField',
            xtype: 'textfield',
            flex: 1,
            hideLabel: true,
        }, {
            xtype: 'button',
            text: 'add',
            handler: 'addItem'
        }]
    }],

    columns: [{
        flex: 1,
        dataIndex: 'text'
    }, {
        xtype: 'actioncolumn',
        align: 'end',
        menuDisabled: true,
        sortable: false,
        items: [
        {
            cls: 'buttonPadding',
            iconCls: 'x-fa fa-edit green icon-margin',
            handler: 'showWindow',
            tooltip: 'Измени мышление и ты изменишь свою жизнь'
        }, 
        {
            iconCls: 'x-fa fa-ban red',
            handler: 'deleteItem',
            tooltip: 'Уничтожить, НИЗВЕСТИ до атомов'
        }]
    }],
})