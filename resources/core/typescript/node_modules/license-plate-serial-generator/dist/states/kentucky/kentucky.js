"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Kentucky](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Kentucky#1975_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `901 JCB` to `253 ZJK`
 *
 * ```
 * import { kentucky } from 'license-plate-serial-generator'
 *
 * kentucky() // '275 RNG'
 * ```
 */
function kentucky() {
    const letters = (0, bb26_1.random)('JCB', 'ZJL');
    const numbers = (0, lib_1.randomNumericString)(letters === 'JCB' ? 901 : 0, letters === 'ZJK' ? 253 : 999);
    return `${numbers} ${letters}`;
}
exports.default = kentucky;
