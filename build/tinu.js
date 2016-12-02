(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Tinu = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var configuration = {
    defaultNumericScale: null,
    distance: {
        defaultSource: "cm",
        defaultTarget: "m",
        "mm": {
            factor: 0.001
        },
        "cm": {
            factor: 0.01
        },
        "dm": {
            factor: 0.1
        },
        "m": {
            factor: 1
        },
        "km": {
            factor: 1000
        },
        "mi": {
            factor: 1609.344
        },
        "in": {
            factor: 0.0254
        },
        "ft": {
            factor: 0.30480
        },
        "yd": {
            factor: 0.9144
        }
    },
    area: {
        defaultSource: "cm2",
        defaultTarget: "m2",
        "mm2": {
            factor: 0.000001
        },
        "cm2": {
            factor: 0.0001
        },
        "dm2": {
            factor: 0.01
        },
        "m2": {
            factor: 1
        },
        "km2": {
            factor: 1000000
        },
        "ac": {
            factor: 4046.86
        },
        "a": {
            factor: 100.0
        },
        "ha": {
            factor: 10000.0
        },
        "mi2": {
            factor: 2589846
        },
        "y2": {
            factor: 0.8361
        },
        "f2": {
            factor: 0.092903
        }
    },
    angle: {
        defaultSource: "rad",
        defaultTarget: "g",
        "rad": {
            factor: 1
        },
        "deg": {
            factor: 0.0174533
        }
    },
    mass: {
        defaultSource: "kg",
        defaultTarget: "g",
        "kg": {
            factor: 1
        },
        "t": {
            factor: 1000
        },
        "g": {
            factor: 0.001
        },
        "mg": {
            factor: 0.000001
        },
        "dr": {
            factor: 0.00388794
        },
        "N": {
            factor: 0.1019716213
        },
        "oz": {
            factor: 0.0283495
        },
        "lb": {
            factor: 0.453592
        }
    }
};

module.exports = configuration;

},{}],2:[function(require,module,exports){
"use strict";

const config = require("./config");

var convert = function(value, type, inputUnit, targetUnit) {
    var factor = config[type][inputUnit].factor / config[type][targetUnit].factor;
    return value * factor;
};

module.exports = convert;

},{"./config":1}],3:[function(require,module,exports){
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

},{"./config":1,"./unit":4}],4:[function(require,module,exports){
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
        unit = (unit === undefined) ? config[this.type].defaultTarget : unit;
        return convert(this.value, this.type, this.unit, unit);
    },

    toString: function(unit) {
        unit = (unit === undefined) ? config[this.type].defaultTarget : unit;
        return convert(this.value, this.type, this.unit, unit) + " " + unit;
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
        unit = parsed.match(/[\d.\-\+]*\s*(.*)/)[1];
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

},{"./config":1,"./convert":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29uZmlnLmpzIiwibGliL2NvbnZlcnQuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvdW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb25maWd1cmF0aW9uID0ge1xuICAgIGRlZmF1bHROdW1lcmljU2NhbGU6IG51bGwsXG4gICAgZGlzdGFuY2U6IHtcbiAgICAgICAgZGVmYXVsdFNvdXJjZTogXCJjbVwiLFxuICAgICAgICBkZWZhdWx0VGFyZ2V0OiBcIm1cIixcbiAgICAgICAgXCJtbVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY21cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG1cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJtXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMVxuICAgICAgICB9LFxuICAgICAgICBcImttXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMTAwMFxuICAgICAgICB9LFxuICAgICAgICBcIm1pXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMTYwOS4zNDRcbiAgICAgICAgfSxcbiAgICAgICAgXCJpblwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDI1NFxuICAgICAgICB9LFxuICAgICAgICBcImZ0XCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4zMDQ4MFxuICAgICAgICB9LFxuICAgICAgICBcInlkXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC45MTQ0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFyZWE6IHtcbiAgICAgICAgZGVmYXVsdFNvdXJjZTogXCJjbTJcIixcbiAgICAgICAgZGVmYXVsdFRhcmdldDogXCJtMlwiLFxuICAgICAgICBcIm1tMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDAwMDAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY20yXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMDAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZG0yXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMVxuICAgICAgICB9LFxuICAgICAgICBcIm0yXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMVxuICAgICAgICB9LFxuICAgICAgICBcImttMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDEwMDAwMDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJhY1wiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDQwNDYuODZcbiAgICAgICAgfSxcbiAgICAgICAgXCJhXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMTAwLjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJoYVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDEwMDAwLjBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAyNTg5ODQ2XG4gICAgICAgIH0sXG4gICAgICAgIFwieTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjgzNjFcbiAgICAgICAgfSxcbiAgICAgICAgXCJmMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDkyOTAzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFuZ2xlOiB7XG4gICAgICAgIGRlZmF1bHRTb3VyY2U6IFwicmFkXCIsXG4gICAgICAgIGRlZmF1bHRUYXJnZXQ6IFwiZ1wiLFxuICAgICAgICBcInJhZFwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWdcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAxNzQ1MzNcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWFzczoge1xuICAgICAgICBkZWZhdWx0U291cmNlOiBcImtnXCIsXG4gICAgICAgIGRlZmF1bHRUYXJnZXQ6IFwiZ1wiLFxuICAgICAgICBcImtnXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMVxuICAgICAgICB9LFxuICAgICAgICBcInRcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxMDAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ1wiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDAxXG4gICAgICAgIH0sXG4gICAgICAgIFwibWdcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAwMDAwMVxuICAgICAgICB9LFxuICAgICAgICBcImRyXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMDM4ODc5NFxuICAgICAgICB9LFxuICAgICAgICBcIk5cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjEwMTk3MTYyMTNcbiAgICAgICAgfSxcbiAgICAgICAgXCJvelwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDI4MzQ5NVxuICAgICAgICB9LFxuICAgICAgICBcImxiXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC40NTM1OTJcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlndXJhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5cbnZhciBjb252ZXJ0ID0gZnVuY3Rpb24odmFsdWUsIHR5cGUsIGlucHV0VW5pdCwgdGFyZ2V0VW5pdCkge1xuICAgIHZhciBmYWN0b3IgPSBjb25maWdbdHlwZV1baW5wdXRVbml0XS5mYWN0b3IgLyBjb25maWdbdHlwZV1bdGFyZ2V0VW5pdF0uZmFjdG9yO1xuICAgIHJldHVybiB2YWx1ZSAqIGZhY3Rvcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdW5pdCA9IHJlcXVpcmUoXCIuL3VuaXRcIik7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG52YXIgdGludSA9IHtcbiAgICBjb25maWc6IGNvbmZpZyxcbiAgICBkaXN0YW5jZTogdW5pdC5mYWN0b3J5LmJpbmQodW5kZWZpbmVkLCBcImRpc3RhbmNlXCIpLFxuICAgIGFyZWE6IHVuaXQuZmFjdG9yeS5iaW5kKHVuZGVmaW5lZCwgXCJhcmVhXCIpLFxuICAgIGFuZ2xlOiB1bml0LmZhY3RvcnkuYmluZCh1bmRlZmluZWQsIFwiYW5nbGVcIiksXG4gICAgbWFzczogdW5pdC5mYWN0b3J5LmJpbmQodW5kZWZpbmVkLCBcIm1hc3NcIilcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGludTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5jb25zdCBjb252ZXJ0ID0gcmVxdWlyZShcIi4vY29udmVydFwiKTtcblxudmFyIFVuaXQgPSB7XG4gICAgdG86IGZ1bmN0aW9uKHVuaXQpIHtcbiAgICAgICAgdW5pdCA9ICh1bml0ID09PSB1bmRlZmluZWQpID8gY29uZmlnW3RoaXMudHlwZV0uZGVmYXVsdFRhcmdldCA6IHVuaXQ7XG4gICAgICAgIHZhciB2YWx1ZSA9IGNvbnZlcnQodGhpcy52YWx1ZSwgdGhpcy50eXBlLCB0aGlzLnVuaXQsIHVuaXQpO1xuXG4gICAgICAgIHJldHVybiBVbml0LmZhY3RvcnkodGhpcy50eXBlLCB2YWx1ZSwgdW5pdCk7XG5cbiAgICB9LFxuXG4gICAgdG9OdW1iZXI6IGZ1bmN0aW9uKHVuaXQpIHtcbiAgICAgICAgdW5pdCA9ICh1bml0ID09PSB1bmRlZmluZWQpID8gY29uZmlnW3RoaXMudHlwZV0uZGVmYXVsdFRhcmdldCA6IHVuaXQ7XG4gICAgICAgIHJldHVybiBjb252ZXJ0KHRoaXMudmFsdWUsIHRoaXMudHlwZSwgdGhpcy51bml0LCB1bml0KTtcbiAgICB9LFxuXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKHVuaXQpIHtcbiAgICAgICAgdW5pdCA9ICh1bml0ID09PSB1bmRlZmluZWQpID8gY29uZmlnW3RoaXMudHlwZV0uZGVmYXVsdFRhcmdldCA6IHVuaXQ7XG4gICAgICAgIHJldHVybiBjb252ZXJ0KHRoaXMudmFsdWUsIHRoaXMudHlwZSwgdGhpcy51bml0LCB1bml0KSArIFwiIFwiICsgdW5pdDtcbiAgICB9LFxuXG4gICAgLyp0b0xhenlTdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVE9ET1wiKTtcbiAgICB9LCovXG5cbiAgICBwYXJzZVVuaXQ6IGZ1bmN0aW9uKHR5cGUsIHZhbHVlLCB1bml0KSB7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZTtcbiAgICAgICAgdmFyIG91dCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHVuaXQ6IHVuaXQgfHwgY29uZmlnW3R5cGVdLmRlZmF1bHRTb3VyY2VcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFyc2VkID0gU3RyaW5nKHN0cik7XG4gICAgICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KHBhcnNlZCwgMTApO1xuICAgICAgICBvdXQudmFsdWUgPSAoIW51bSB8fCBpc05hTihudW0pKSA/IDAgOiBudW07XG4gICAgICAgIHVuaXQgPSBwYXJzZWQubWF0Y2goL1tcXGQuXFwtXFwrXSpcXHMqKC4qKS8pWzFdO1xuICAgICAgICBvdXQudW5pdCA9ICAoIXVuaXQgfHwgdW5pdC5sZW5ndGggPT09IDAgfHwgdW5pdCA9PT0gXCJ1bmRlZmluZWRcIikgPyBvdXQudW5pdCA6IHVuaXQ7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIGZhY3Rvcnk6IGZ1bmN0aW9uKHR5cGUsIHZhbHVlLCB1bml0KSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBVbml0LnBhcnNlVW5pdCh0eXBlLCB2YWx1ZSwgdW5pdCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnZhbHVlLFxuICAgICAgICAgICAgdW5pdDogcGFyYW1zLnVuaXQsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdG86IFVuaXQudG8sXG4gICAgICAgICAgICB0b051bWJlcjogVW5pdC50b051bWJlcixcbiAgICAgICAgICAgIHRvU3RyaW5nOiBVbml0LnRvU3RyaW5nXG4gICAgICAgIH07XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVbml0O1xuIl19
