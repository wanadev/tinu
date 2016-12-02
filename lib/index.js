"use strict";

var unit = require("./unit");
var config = require("./config");

var tinu = {
    config: config,
    distance: unit.factory.bind(undefined, "distance"),
    area: unit.factory.bind(undefined, "area"),
    angle: unit.factory.bind(undefined, "angle"),
    mass: unit.factory.bind(undefined, "mass")
};

module.exports = tinu;
