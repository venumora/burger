const ORM = require('../config/orm');

const Burger = {
    selectAll: function(response) {
        ORM.selectAll('burgers', response);
    },

    insertOne: function(name, devoured, response) {
        ORM.insertOne('burgers', 'burger_name', 'devoured', name, devoured, response);
    },

    updateName: function(val, whereVal, response) {
        ORM.updateOne('burgers', 'burger_name', val, 'id', whereVal, response);
    },

    updateDevoured: function(val, whereVal, response) {
        ORM.updateOne('burgers', 'devoured', val, 'id', whereVal, response);
    }
};

module.exports = Burger;
