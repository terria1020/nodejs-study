"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Developer = /** @class */ (function () {
    function Developer(name, sleepingType) {
        this.name = name;
        this.sleepingType = sleepingType;
    }
    return Developer;
}());
var d = typeof Developer;
console.log("d: ".concat(d));
var d1 = new Developer("hello", 1);
var testA = { name: "박재한" };
var testC = { age: 26 };
var testB = { hobby: undefined };
var BottomSheetMap = {
    a: testA,
    b: testB,
    c: testC
};
console.log("test:", typeof BottomSheetMap);
