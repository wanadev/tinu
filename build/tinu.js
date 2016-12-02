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

},{"./config":1,"./convert":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29uZmlnLmpzIiwibGliL2NvbnZlcnQuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvdW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNvbmZpZ3VyYXRpb24gPSB7XG4gICAgZGVmYXVsdE51bWVyaWNTY2FsZTogbnVsbCxcbiAgICBkaXN0YW5jZToge1xuICAgICAgICBkZWZhdWx0U291cmNlOiBcImNtXCIsXG4gICAgICAgIGRlZmF1bHRUYXJnZXQ6IFwibVwiLFxuICAgICAgICBcIm1tXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkbVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcIm1cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwia21cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxMDAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibWlcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxNjA5LjM0NFxuICAgICAgICB9LFxuICAgICAgICBcImluXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMjU0XG4gICAgICAgIH0sXG4gICAgICAgIFwiZnRcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjMwNDgwXG4gICAgICAgIH0sXG4gICAgICAgIFwieWRcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjkxNDRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYXJlYToge1xuICAgICAgICBkZWZhdWx0U291cmNlOiBcImNtMlwiLFxuICAgICAgICBkZWZhdWx0VGFyZ2V0OiBcIm0yXCIsXG4gICAgICAgIFwibW0yXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMDAwMDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAwMDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkbTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAxXG4gICAgICAgIH0sXG4gICAgICAgIFwibTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwia20yXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMTAwMDAwMFxuICAgICAgICB9LFxuICAgICAgICBcImFjXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogNDA0Ni44NlxuICAgICAgICB9LFxuICAgICAgICBcImFcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxMDAuMFxuICAgICAgICB9LFxuICAgICAgICBcImhhXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMTAwMDAuMFxuICAgICAgICB9LFxuICAgICAgICBcIm1pMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDI1ODk4NDZcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5MlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuODM2MVxuICAgICAgICB9LFxuICAgICAgICBcImYyXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wOTI5MDNcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYW5nbGU6IHtcbiAgICAgICAgZGVmYXVsdFNvdXJjZTogXCJyYWRcIixcbiAgICAgICAgZGVmYXVsdFRhcmdldDogXCJnXCIsXG4gICAgICAgIFwicmFkXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlZ1wiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDE3NDUzM1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtYXNzOiB7XG4gICAgICAgIGRlZmF1bHRTb3VyY2U6IFwia2dcIixcbiAgICAgICAgZGVmYXVsdFRhcmdldDogXCJnXCIsXG4gICAgICAgIFwia2dcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidFwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDEwMDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZ1wiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDAwMDAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAwMzg4Nzk0XG4gICAgICAgIH0sXG4gICAgICAgIFwiTlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMTAxOTcxNjIxM1xuICAgICAgICB9LFxuICAgICAgICBcIm96XCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMjgzNDk1XG4gICAgICAgIH0sXG4gICAgICAgIFwibGJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjQ1MzU5MlxuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcblxudmFyIGNvbnZlcnQgPSBmdW5jdGlvbih2YWx1ZSwgdHlwZSwgaW5wdXRVbml0LCB0YXJnZXRVbml0KSB7XG4gICAgdmFyIGZhY3RvciA9IGNvbmZpZ1t0eXBlXVtpbnB1dFVuaXRdLmZhY3RvciAvIGNvbmZpZ1t0eXBlXVt0YXJnZXRVbml0XS5mYWN0b3I7XG4gICAgcmV0dXJuIHZhbHVlICogZmFjdG9yO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1bml0ID0gcmVxdWlyZShcIi4vdW5pdFwiKTtcbnZhciBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5cbnZhciB0aW51ID0ge1xuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGRpc3RhbmNlOiB1bml0LmZhY3RvcnkuYmluZCh1bmRlZmluZWQsIFwiZGlzdGFuY2VcIiksXG4gICAgYXJlYTogdW5pdC5mYWN0b3J5LmJpbmQodW5kZWZpbmVkLCBcImFyZWFcIiksXG4gICAgYW5nbGU6IHVuaXQuZmFjdG9yeS5iaW5kKHVuZGVmaW5lZCwgXCJhbmdsZVwiKSxcbiAgICBtYXNzOiB1bml0LmZhY3RvcnkuYmluZCh1bmRlZmluZWQsIFwibWFzc1wiKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aW51O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbmNvbnN0IGNvbnZlcnQgPSByZXF1aXJlKFwiLi9jb252ZXJ0XCIpO1xuXG52YXIgVW5pdCA9IHtcbiAgICB0bzogZnVuY3Rpb24odW5pdCkge1xuICAgICAgICB1bml0ID0gKHVuaXQgPT09IHVuZGVmaW5lZCkgPyBjb25maWdbdGhpcy50eXBlXS5kZWZhdWx0VGFyZ2V0IDogdW5pdDtcbiAgICAgICAgdmFyIHZhbHVlID0gY29udmVydCh0aGlzLnZhbHVlLCB0aGlzLnR5cGUsIHRoaXMudW5pdCwgdW5pdCk7XG5cbiAgICAgICAgcmV0dXJuIFVuaXQuZmFjdG9yeSh0aGlzLnR5cGUsIHZhbHVlLCB1bml0KTtcblxuICAgIH0sXG5cbiAgICB0b051bWJlcjogZnVuY3Rpb24odW5pdCkge1xuICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnQodGhpcy52YWx1ZSwgdGhpcy50eXBlLCB0aGlzLnVuaXQsIHVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH0sXG5cbiAgICB0b1N0cmluZzogZnVuY3Rpb24odW5pdCkge1xuICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnQodGhpcy52YWx1ZSwgdGhpcy50eXBlLCB0aGlzLnVuaXQsIHVuaXQpICsgXCIgXCIgKyB1bml0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICsgXCIgXCIgKyB0aGlzLnVuaXQ7XG4gICAgfSxcblxuICAgIC8qdG9MYXp5U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlRPRE9cIik7XG4gICAgfSwqL1xuXG4gICAgcGFyc2VVbml0OiBmdW5jdGlvbih2YWx1ZSwgdW5pdCkge1xuICAgICAgICB2YXIgc3RyID0gdmFsdWU7XG4gICAgICAgIHZhciBvdXQgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB1bml0OiB1bml0IHx8IFwiXCJcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFyc2VkID0gU3RyaW5nKHN0cik7XG4gICAgICAgIHZhciBudW0gPSBwYXJzZUZsb2F0KHBhcnNlZCwgMTApO1xuICAgICAgICBvdXQudmFsdWUgPSAoIW51bSB8fCBpc05hTihudW0pKSA/IDAgOiBudW07XG4gICAgICAgIHVuaXQgPSBwYXJzZWQubWF0Y2goL1tcXGQuXFwtXFwrXSpcXHMqKC4qKS8pWzFdO1xuICAgICAgICBvdXQudW5pdCA9ICAoIXVuaXQgfHwgdW5pdC5sZW5ndGggPT09IDAgfHwgdW5pdCA9PT0gXCJ1bmRlZmluZWRcIikgPyBvdXQudW5pdCA6IHVuaXQ7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIGZhY3Rvcnk6IGZ1bmN0aW9uKHR5cGUsIHZhbHVlLCB1bml0KSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBVbml0LnBhcnNlVW5pdCh2YWx1ZSwgdW5pdCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyYW1zLnZhbHVlLFxuICAgICAgICAgICAgdW5pdDogcGFyYW1zLnVuaXQsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdG86IFVuaXQudG8sXG4gICAgICAgICAgICB0b051bWJlcjogVW5pdC50b051bWJlcixcbiAgICAgICAgICAgIHRvU3RyaW5nOiBVbml0LnRvU3RyaW5nXG4gICAgICAgIH07XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVbml0O1xuIl19
