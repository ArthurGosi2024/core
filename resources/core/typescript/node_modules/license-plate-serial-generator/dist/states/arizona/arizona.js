"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Arizona](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Arizona#1956_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `AAA00001` to `CPD0898`
 *
 * ```
 * import { arizona } from 'license-plate-serial-generator'
 *
 * arizona() // 'AUT8173'
 * ```
 */
function arizona() {
    const letters = (0, bb26_1.random)('AAA', 'CNY');
    const numbers = (0, lib_1.randomNumericString)(1, letters === 'CNX' ? 1511 : 9999);
    return letters.toUpperCase() + numbers;
}
exports.default = arizona;
