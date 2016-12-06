"use strict";

var config = require("./config");
var convert = require("./convert");

var Unit = {
    to: function(unit, numericScale) {
        unit = (unit === undefined) ? config[this.type].defaultTarget : unit;
        var value = convert(this.value, this.type, this.unit, unit, numericScale);

        return Unit.factory(this.type, value, unit);

    },

    toNumber: function(unit, numericScale) {
        unit = (unit === undefined) ? config[this.type].defaultTarget : unit;
        return convert(this.value, this.type, this.unit, unit, numericScale);
    },

    toString: function(unit, numericScale) {
        unit = (unit === undefined) ? config[this.type].defaultTarget : unit;
        return convert(this.value, this.type, this.unit, unit, numericScale) + " " + unit;
    },

    /*toLazyString: function () {
        console.warn("TODO");
    },*/

    parseUnit: function(type, value, unit) {
        var str = value;
        var out = {
            value: value,
            unit: unit || config[type].defaultSource
        };

        var parsed = String(str);
        var num = parseFloat(parsed, 10);
        out.value = (!num || isNaN(num)) ? 0 : num;
        unit = parsed.match(/[\d.\-\+]*(?:e[\d.\-\+]+)?\s*(.*)/)[1];
        out.unit =  (!unit || unit.length === 0 || unit === "undefined") ? out.unit : unit;
        return out;
    },

    factory: function(type, value, unit) {
        var params = Unit.parseUnit(type, value, unit);
        return {
            value: params.value,
            unit: params.unit,
            type: type,
            to: Unit.to,
            toNumber: Unit.toNumber,
            toString: Unit.toString
        };
    }
};

module.exports = Unit;
