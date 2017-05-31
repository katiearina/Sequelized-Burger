// Import the models folder
var db = require("../models/");

// =============================================================

module.exports = function(app) {

    // GET request
    app.get("/", function(request, response) {
        db.Burger.findAll({}).then(function(results) {
            var handlebarsObject = {
                Burgers: results
            };
            console.log(handlebarsObject);
        response.render("index", handlebarsObject);
        });
    });

    // POST request
    app.post("/", function(request, response) {
        db.Burger.create({
            burger_name: request.body.burger_name
        }).then(function(results) {
            console.log("Success! " + request.body.burger_name + " was added!");
            response.redirect("/");
        });
    });

    // PUT request
    app.put("/:id", function(request, response) {
        db.Burger.update({
            devoured: request.body.devoured
        }, {
            where: {
                id: request.params.id
            }
        }).then(function(results) {
            response.redirect("/");
        });
    });

};