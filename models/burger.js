// orm file - talk to the database
var orm = require("../config/orm.js");

// burger variable exported back to controller
var burger = {
    // selectAll for all the burger
    all: function (cb) {
        orm.all('burgers', function (res) {
            cb(res);
        });
    },
    // adding new burger
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function (res) {
            cb(res);
        });
    },
    // update for changing burger status
    update: function (objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    },
};
// export burger back to controller
module.exports = burger;    