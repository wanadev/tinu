"use strict";

var config = require("./config");

var convert = function(value, type, inputUnit, targetUnit) {
    var factor = config[type][inputUnit].factor / config[type][targetUnit].factor;
    return value * factor;
};

module.exports = convert;
