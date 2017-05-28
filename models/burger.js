// Dependencies
var orm = require("../config/orm.js");
// =============================================================

var burger = {
    // Selects all columns from the burgers table
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    // Inserts a new row into the burgers table
    insertOne: function(column, values, callback) {
        orm.insertOne("burgers", column, values, function(res) {
            callback(res);
        });
    },

    // Updates a row in the burgers table
    updateOne: function(column, values, id, thisId, callback) {
        orm.updateOne("burgers", column, values, id, thisId, function(res) {
            callback(res);
        });
    }
};

// =============================================================
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;