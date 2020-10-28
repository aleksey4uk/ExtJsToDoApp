Ext.define('view.main.TodoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.TodoController',

    showWindow: function(view, rowIndex, colIndex, item,e, record, row) {
        const window = Ext.create('Ext.window.Window', {
            title: 'Please, edit your Task!',
            reference: 'windowDialog',
            defaultListenerScope: true,
            height: 200,
            width: 400,
            layout: 'fit',
            dockedItems: [{
                dock: 'bottom',
                xtype: 'button',
                text: 'Edit!',
                handler: function() {
                    record.set('text', window.down('#editTextField').getValue());
                    window.close();
                },
                cls: 'classic',
                weight : 50,
                margin: 10,
            }],
            items: {  // Let's put an empty grid in just to illustrate fit layout
                xtype: 'textareafield',
                itemId: 'editTextField',
                grow: true,
                name: 'message',
                anchor: '100%',
                value: record.data.text,
            }
        }).show();
    },

    deleteItem: function(view, rowIndex, colIndex, item,e, record, row ) {
        this.getView()
            .getStore()
                .remove(record);
    },

    addItem: function(...params) {
        var textField = this.lookup('todoTextField');
        const value = textField.getValue();
        if (value && value.length) {
            this.getView()
                .getStore()
                    .add({text: value});
        }
    },
})