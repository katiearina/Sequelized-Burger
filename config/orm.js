// Dependencies
var connection = require("./connection.js");
// =============================================================

var orm = {
    // Selects all columns from the table
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??";
        var query = connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result);
            // console.log(query.sql);
        });
    },

    // Inserts a new row into the table
    insertOne: function(table, column, values, callback) {
        var queryString = "INSERT INTO ?? SET ?? = ?";
        var query = connection.query(queryString, [table, column, values], function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result);
            // console.log(query.sql);
        });
    },

    // Updates a row in the table
    updateOne: function(table, column, values, id, thisId, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var query = connection.query(queryString, [table, column, values, id, thisId], function (err, result) {
            console.log(query.sql); 
            if (err) throw err;
            // console.log(result);
            callback(result);
            // console.log(query.sql);           
        });
    }
};

// =============================================================
// Export ORM for model (burger.js) to use
module.exports = orm;