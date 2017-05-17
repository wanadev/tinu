# TINU - These Incredibly Naughty Units

[![Greenkeeper badge](https://badges.greenkeeper.io/wanadev/tinu.svg)](https://greenkeeper.io/)

[![NPM version](https://badge.fury.io/js/tinu.png)](http://badge.fury.io/js/tinu)
[![Build Status](https://travis-ci.org/wanadev/tinu.svg?branch=master)](https://travis-ci.org/wanadev/tinu)

A toolkit to convert easily any units.

## Usage

Add the npm package [tinu](https://www.npmjs.com/package/tinu) to your project:

    npm install tinu --save

or clone:

    git clone git@github.com:wanadev/tinu.git

## Getting Started

Conversion function returns an object that contain the parsed and NORMALIZED value/unit AND some function described bellow :

```javascript
Tinu.distance(12);           // → {value: 12, unit: "cm", ...}
Tinu.distance(12, "mm");     // → {value: 12, unit: "mm", ...}
Tinu.distance(12, "in");     // → {value: 12, unit: "in", ...}
Tinu.distance("12m");        // → {value: 12, unit: "m",  ...}
Tinu.distance("12 m");       // → {value: 12, unit: "m",  ...}
Tinu.distance("12.00m");     // → {value: 12, unit: "m",  ...}

Tinu.area(80, "m2");         // → {value: 80, unit: "m2", ...}
```

The .to() method converts to the same object but in the requested unit.

```javascript
Tinu.distance(12).to("m");            // → {value: 0.012, "m", ...}
Tinu.distance(12).to("m").to("mm");   // → {value: 120, "mm", ...}
Tinu.distance(12).to();  // → converts to the default target unit: {value: 0.012, "m", ...}
```

The .toNumber(unit=null) method converts to a Number in the requested unit

```javascript
Tinu.distance(12).toNumber("m");  // → 0.012
Tinu.distance(12).toNumber();     // → converts to the default target unit: 0.012
```

The .toString(unit=null, numericScale=null) method converts to a String in the requested unit, that includes the unit

```javascript
Tinu.distance(12, "cm").toString("m");     // → "0.012 m"
Tinu.distance(12, "cm").toString("m", 2);  // → "0.01 m"
Tinu.distance(12, "cm").toString();        // → converts to the default target unit: "0.012 m"
```

Please help yourself to add type and other unit if needed !
