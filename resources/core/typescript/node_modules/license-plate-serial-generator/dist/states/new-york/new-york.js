"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [New York](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_York#1966_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `FAA-1000` to `JJS-6999`
 *
 * ```
 * import { newYork } from 'license-plate-serial-generator'
 *
 * newYork() // 'GMS-7910'
 * ```
 */
function newYork() {
    const letters = (0, bb26_1.random)('FAA', 'JCT');
    const digits = (0, lib_1.randomNumericString)(letters === 'FAA' ? 1000 : 0, 9999);
    return `${letters}-${digits}`;
}
exports.default = newYork;
