"use strict";

const config = require("./config");
const convert = require("./convert");

var Unit = {
    to: function(unit) {
        unit = (unit === undefined) ? config[this.type].defaultTarget : unit;
        var value = convert(this.value, this.type, this.unit, unit);

        return Unit.factory(this.type, value, unit);

    },

    toNumber: function(unit) {
        if (unit) {
            return convert(this.value, this.type, this.unit, unit);
        }
        return this.value;
    },

    toString: function(unit) {
        if (unit) {
            return convert(this.value, this.type, this.unit, unit) + " " + unit;
        }
        return this.value + " " + this.unit;
    },

    /*toLazyString: function () {
        console.warn("TODO");
    },*/

    parseUnit: function(value, unit) {
        var str = value;
        var out = {
            value: value,
            unit: unit || ""
        };

        var parsed = String(str);
        var num = parseFloat(parsed, 10);
        out.value = (!num || isNaN(num)) ? 0 : num;
        unit = parsed.match(/[\d.\-\+]*\s*(.*)/)[1];
        out.unit =  (!unit || unit.length === 0 || unit === "undefined") ? out.unit : unit;
        return out;
    },

    factory: function(type, value, unit) {
        var params = Unit.parseUnit(value, unit);
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
