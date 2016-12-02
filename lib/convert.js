"use strict";

var config = require("./config");

var convert = function(value, type, inputUnit, targetUnit, numericScale) {
    numericScale = (numericScale === undefined) ? config.defaultNumericScale : numericScale;
    var digits = Math.pow(10, numericScale);
    var factor = config[type][inputUnit].factor / config[type][targetUnit].factor;
    return Math.round(value * factor * digits) / digits;
};

module.exports = convert;
