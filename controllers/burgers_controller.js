// Dependencies
var express = require("express");
var router = express.Router();

// Import the burger model
var burger = require("../models/burger.js");
// =============================================================

// GET request
router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
        });
});

// POST request
router.post("/", function(request, response) {
    burger.insertOne("burger_name", request.body.burger_name,
        function(data) {
            var handlebarsObject = {
                burgers: data
            };
        console.log(handlebarsObject);
        response.redirect("/");
    });
});

// PUT request
router.put("/:id", function(request, response) {
    burger.updateOne("devoured", request.body.devoured, "id", request.params.id, function(data) {
            var handlebarsObject = {
                burgers: data
            };
        console.log(handlebarsObject);
        response.redirect("/");
    });
});

// =============================================================
// Export routes for server.js to use.
module.exports = router;