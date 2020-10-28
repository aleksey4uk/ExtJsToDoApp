Ext.define('MyApp.view.todo.TodoModel', {
    extend: 'Ext.data.Model',
    alias: 'model.TodoModel',
    fields: [
        {name: 'text',  type: 'string'},
    ],

    changeName: function() {
        var oldName = this.get('name'),
            newName = oldName + " The Barbarian";

        this.set('name', newName);
    }
});