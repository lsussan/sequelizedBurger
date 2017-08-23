var express = require("express");
var router = express.Router();
var models = require("../models/");


// Import the model to use its database functions.
// var burgers = require('../models/');


router.get("/", function (req, res) {
    res.redirect("/burgers")
});


// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
    
    //sequelize to get burgers from db
        models.burgers.findAll({ 
        }).then(function(data) {
        console.log(data);
    //pass returned object to handlebars obj
        var hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Create a new burger
router.post("/burgers/create", function(req, res){
    
    //sequelize query to add burger to dbase
    models.burgers.create(
      {
        burger_name: req.body.burger_name,
        devoured: false
      }
    ).then(function(data){
        console.log(data);

        res.redirect("/burgers");
    });
});

//devour a burger
router.put("/burgers/update/", function (req, res) {
    models.burgers.update({
        devoured: true
    },
      { 
        where: {
            id: req.body.burger_id
        }
      }
    // Then, select the eaten burger by it's id
    ).then(function(data) {
        res.redirect("/burgers");

  });
});

// Export routes for server.js to use.
module.exports = router;