"use strict";

var expect = require("expect.js");
var Tinu = require("../lib");

describe("Tinu", function() {
    describe("unit", function() {
        it("should width a number return an object with the value and the unit", function() {
            var res = Tinu.distance(12);
            expect(res.value).to.equal(12);
            expect(res.unit).to.equal("cm");
        });

        it("should with a number and a unit return an object with the value and the unit", function() {
            var res = Tinu.distance(12, "mm");
            expect(res.value).to.equal(12);
            expect(res.unit).to.equal("mm");
            res = Tinu.distance(10, "in");
            expect(res.value).to.equal(10);
            expect(res.unit).to.equal("in");
        });

        it("should with string return an object with the value and the unit", function() {
            var res = Tinu.distance("12mm");
            expect(res.value).to.equal(12);
            expect(res.unit).to.equal("mm");
            res = Tinu.distance("10 in");
            expect(res.value).to.equal(10);
            expect(res.unit).to.equal("in");
            res = Tinu.distance("11.00m");
            expect(res.value).to.equal(11);
            expect(res.unit).to.equal("m");
        });
    });

    describe("to", function() {
        it("should convert to the same object but in the requested unit", function() {
            var res = Tinu.distance(12).to("m");
            expect(res.value).to.equal(0.12);
            expect(res.unit).to.equal("m");
        });

        it("should concatenate multiple to functions", function() {
            var res = Tinu.distance(12).to("m").to("mm").to("cm");
            expect(res.value).to.equal(12);
            expect(res.unit).to.equal("cm");
        });

        it("should convert to the default target", function() {
            var res = Tinu.distance(12).to();
            expect(res.value).to.equal(0.12);
            expect(res.unit).to.equal("m");
        });
    });

    describe("toNumber", function() {
        it("should return the converted value", function() {
            var res = Tinu.distance(12).toNumber("m");
            expect(res).to.equal(0.12);
        });

        it("should return the converted value in the default target unit", function() {
            var res = Tinu.distance(12).toNumber();
            expect(res).to.equal(0.12);
        });
    });

    describe("toString", function() {
        it("should convert to a String in the requested unit, that includes the unit", function() {
            var res = Tinu.distance(12, "cm").toString("m");
            expect(res).to.equal("0.12 m");
        });

        it("should return the converted value in the default target unit", function() {
            var res = Tinu.distance(12, "cm").toString();
            expect(res).to.equal("0.12 m");
        });
    });
});
