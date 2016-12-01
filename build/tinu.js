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
        defaultTarget: "deg",
        "rad": {
            factor: 1
        },
        "deg": {
            factor: 0.0174533
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
    area: unit.factory.bind(undefined, "distance"),
    angle: unit.factory.bind(undefined, "angle")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29uZmlnLmpzIiwibGliL2NvbnZlcnQuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvdW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29uZmlndXJhdGlvbiA9IHtcbiAgICBkZWZhdWx0TnVtZXJpY1NjYWxlOiBudWxsLFxuICAgIGRpc3RhbmNlOiB7XG4gICAgICAgIGRlZmF1bHRTb3VyY2U6IFwiY21cIixcbiAgICAgICAgZGVmYXVsdFRhcmdldDogXCJtXCIsXG4gICAgICAgIFwibW1cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAwMVxuICAgICAgICB9LFxuICAgICAgICBcImNtXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4wMVxuICAgICAgICB9LFxuICAgICAgICBcImRtXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIFwibVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJrbVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDEwMDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDE2MDkuMzQ0XG4gICAgICAgIH0sXG4gICAgICAgIFwiaW5cIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAyNTRcbiAgICAgICAgfSxcbiAgICAgICAgXCJmdFwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMzA0ODBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5ZFwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuOTE0NFxuICAgICAgICB9XG4gICAgfSxcbiAgICBhcmVhOiB7XG4gICAgICAgIGRlZmF1bHRTb3VyY2U6IFwiY20yXCIsXG4gICAgICAgIGRlZmF1bHRUYXJnZXQ6IFwibTJcIixcbiAgICAgICAgXCJtbTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAwMDAwMVxuICAgICAgICB9LFxuICAgICAgICBcImNtMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDAwMVxuICAgICAgICB9LFxuICAgICAgICBcImRtMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDAuMDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJtMlwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJrbTJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxMDAwMDAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiYWNcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiA0MDQ2Ljg2XG4gICAgICAgIH0sXG4gICAgICAgIFwiYVwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDEwMC4wXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGFcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAxMDAwMC4wXG4gICAgICAgIH0sXG4gICAgICAgIFwibWkyXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMjU4OTg0NlxuICAgICAgICB9LFxuICAgICAgICBcInkyXCI6IHtcbiAgICAgICAgICAgIGZhY3RvcjogMC44MzYxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZjJcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjA5MjkwM1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhbmdsZToge1xuICAgICAgICBkZWZhdWx0U291cmNlOiBcInJhZFwiLFxuICAgICAgICBkZWZhdWx0VGFyZ2V0OiBcImRlZ1wiLFxuICAgICAgICBcInJhZFwiOiB7XG4gICAgICAgICAgICBmYWN0b3I6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWdcIjoge1xuICAgICAgICAgICAgZmFjdG9yOiAwLjAxNzQ1MzNcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlndXJhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5cbnZhciBjb252ZXJ0ID0gZnVuY3Rpb24odmFsdWUsIHR5cGUsIGlucHV0VW5pdCwgdGFyZ2V0VW5pdCkge1xuICAgIHZhciBmYWN0b3IgPSBjb25maWdbdHlwZV1baW5wdXRVbml0XS5mYWN0b3IgLyBjb25maWdbdHlwZV1bdGFyZ2V0VW5pdF0uZmFjdG9yO1xuICAgIHJldHVybiB2YWx1ZSAqIGZhY3Rvcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdW5pdCA9IHJlcXVpcmUoXCIuL3VuaXRcIik7XG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG52YXIgdGludSA9IHtcbiAgICBjb25maWc6IGNvbmZpZyxcbiAgICBkaXN0YW5jZTogdW5pdC5mYWN0b3J5LmJpbmQodW5kZWZpbmVkLCBcImRpc3RhbmNlXCIpLFxuICAgIGFyZWE6IHVuaXQuZmFjdG9yeS5iaW5kKHVuZGVmaW5lZCwgXCJkaXN0YW5jZVwiKSxcbiAgICBhbmdsZTogdW5pdC5mYWN0b3J5LmJpbmQodW5kZWZpbmVkLCBcImFuZ2xlXCIpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbnU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuY29uc3QgY29udmVydCA9IHJlcXVpcmUoXCIuL2NvbnZlcnRcIik7XG5cbnZhciBVbml0ID0ge1xuICAgIHRvOiBmdW5jdGlvbih1bml0KSB7XG4gICAgICAgIHVuaXQgPSAodW5pdCA9PT0gdW5kZWZpbmVkKSA/IGNvbmZpZ1t0aGlzLnR5cGVdLmRlZmF1bHRUYXJnZXQgOiB1bml0O1xuICAgICAgICB2YXIgdmFsdWUgPSBjb252ZXJ0KHRoaXMudmFsdWUsIHRoaXMudHlwZSwgdGhpcy51bml0LCB1bml0KTtcblxuICAgICAgICByZXR1cm4gVW5pdC5mYWN0b3J5KHRoaXMudHlwZSwgdmFsdWUsIHVuaXQpO1xuXG4gICAgfSxcblxuICAgIHRvTnVtYmVyOiBmdW5jdGlvbih1bml0KSB7XG4gICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udmVydCh0aGlzLnZhbHVlLCB0aGlzLnR5cGUsIHRoaXMudW5pdCwgdW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcblxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbih1bml0KSB7XG4gICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udmVydCh0aGlzLnZhbHVlLCB0aGlzLnR5cGUsIHRoaXMudW5pdCwgdW5pdCkgKyBcIiBcIiArIHVuaXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyBcIiBcIiArIHRoaXMudW5pdDtcbiAgICB9LFxuXG4gICAgLyp0b0xhenlTdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVE9ET1wiKTtcbiAgICB9LCovXG5cbiAgICBwYXJzZVVuaXQ6IGZ1bmN0aW9uKHZhbHVlLCB1bml0KSB7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZTtcbiAgICAgICAgdmFyIG91dCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHVuaXQ6IHVuaXQgfHwgXCJcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwYXJzZWQgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgdmFyIG51bSA9IHBhcnNlRmxvYXQocGFyc2VkLCAxMCk7XG4gICAgICAgIG91dC52YWx1ZSA9ICghbnVtIHx8IGlzTmFOKG51bSkpID8gMCA6IG51bTtcbiAgICAgICAgdW5pdCA9IHBhcnNlZC5tYXRjaCgvW1xcZC5cXC1cXCtdKlxccyooLiopLylbMV07XG4gICAgICAgIG91dC51bml0ID0gICghdW5pdCB8fCB1bml0Lmxlbmd0aCA9PT0gMCB8fCB1bml0ID09PSBcInVuZGVmaW5lZFwiKSA/IG91dC51bml0IDogdW5pdDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9LFxuXG4gICAgZmFjdG9yeTogZnVuY3Rpb24odHlwZSwgdmFsdWUsIHVuaXQpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFVuaXQucGFyc2VVbml0KHZhbHVlLCB1bml0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMudmFsdWUsXG4gICAgICAgICAgICB1bml0OiBwYXJhbXMudW5pdCxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICB0bzogVW5pdC50byxcbiAgICAgICAgICAgIHRvTnVtYmVyOiBVbml0LnRvTnVtYmVyLFxuICAgICAgICAgICAgdG9TdHJpbmc6IFVuaXQudG9TdHJpbmdcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXQ7XG4iXX0=
