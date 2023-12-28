"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Tennessee](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Tennessee#1962_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `BBB-001` to `BVK-999`
 *
 * ```
 * import { tennessee } from 'license-plate-serial-generator'
 *
 * tennessee() // '26E 391'
 * ```
 */
function tennessee() {
    const letters = (0, bb26_1.random)('BBB', 'BTG');
    const numbers = (0, lib_1.randomNumericString)(1, 999);
    return `${letters}-${numbers}`;
}
exports.default = tennessee;
