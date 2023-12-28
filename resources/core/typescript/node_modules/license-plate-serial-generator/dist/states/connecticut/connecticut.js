"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Connecticut](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Connecticut#1957_to_present)
 *
 * **Serial format**: `AB·12345`
 *
 * **Serial range**: `AA·00001` to `AV·00042`
 *
 * ```
 * import { connecticut } from 'license-plate-serial-generator'
 *
 * connecticut() // 'AO·01229'
 * ```
 */
function connecticut() {
    const letters = (0, bb26_1.random)('AA', 'AW');
    const numbers = (0, lib_1.randomNumericString)(1, letters === 'AV' ? 42 : 99999, 5);
    return letters + lib_1.interpunct + numbers;
}
exports.default = connecticut;
