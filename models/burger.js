// Importing ORM to create functions that will interact with the burger database


var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, cb) {
        orm.update("burgers", objColVals, function (res) {
            cb(res);
        });
    }
};
module.exports = burger; 