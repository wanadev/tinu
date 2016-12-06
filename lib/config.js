"use strict";

var configuration = {
    defaultNumericScale: 2,
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
        "in2": {
            factor: 0.00064516
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
    },
    volume: {
        defaultSource: "m3",
        defaultTarget: "gal",
        "mm3": {
            factor: 1e-9
        },
        "cm3": {
            factor: 0.000001
        },
        "m3": {
            factor: 1
        },
        "km3": {
            factor: 1000000000
        },
        "f3": {
            factor: 0.0283168
        },
        "in3": {
            factor: 0.0000163871
        },
        "gal": {
            factor: 0.0037854
        },
        "lt": {
            factor: 0.001
        },
        "floz": {
            factor: 0.0000295734
        },
        "pt": {
            factor: 0.0004732
        },
        "st": {
            factor: 1
        }
    }
};

module.exports = configuration;
