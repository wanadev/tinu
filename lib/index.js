"use strict";

var unit = require("./unit");
var config = require("./config");

var tinu = {
    config: config,
    distance: unit.factory.bind(undefined, "distance"),
    area: unit.factory.bind(undefined, "distance"),
    angle: unit.factory.bind(undefined, "angle")
};

module.exports = tinu;
