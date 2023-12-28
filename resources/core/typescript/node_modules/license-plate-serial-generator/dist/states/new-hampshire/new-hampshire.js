"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../../lib");
/**
 * Generates random serial for [New Hampshire](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Hampshire#1973_to_present)
 *
 * **Serial format**: `123 4567`
 *
 * **Serial range**: `100 0000` to `458 5718`
 *
 * ```
 * import { newHampshire } from 'license-plate-serial-generator'
 *
 * newHampshire() // '216 6629'
 * ```
 */
function newHampshire() {
    const numbers = (0, lib_1.randomNumericString)(1000000, 4585718);
    return numbers.slice(0, 3) + ' ' + numbers.slice(3);
}
exports.default = newHampshire;
