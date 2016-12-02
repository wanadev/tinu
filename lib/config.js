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
