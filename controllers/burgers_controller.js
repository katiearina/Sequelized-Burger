// Dependencies
var express = require("express");
var router = express.Router();

// Import the burger model
var db = require("../models/");
// =============================================================

module.exports = function(app) {

    // GET request
    app.get("/", function(request, response) {
        db.Burger.findAll({}).then(function(results) {
            response.json(results);
        });
    });

    // POST request
    app.post("/", function(request, response) {
        db.Burger.create({
            burger_name: request.body.burger_name
        }).then(function(results) {
            console.log("Success! " + request.body.burger_name + " was added!");
            response.end();
        });
    });

    // PUT request
    app.put(":/id", function(request, response) {
        db.Burger.update({
            devoured: request.body.devoured
        }, {
            where: {
                id: request.body.id
            }
        }).then(function(results) {
            response.json(results);
        });
    });

};