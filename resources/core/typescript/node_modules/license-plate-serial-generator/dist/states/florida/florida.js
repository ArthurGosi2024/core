"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Florida](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Florida#1974_to_present)
 *
 * **Serial format**: `Z12 3BC`
 *
 * **Serial range**: `Z00 0AA` to `Z89 0FW`
 *
 * ```
 * import { florida } from 'license-plate-serial-generator'
 *
 * florida() // 'Z36 5BG'
 * ```
 */
function florida() {
    const digits = (0, lib_1.randomNumericString)(890);
    let left = 'Z';
    let right = '';
    left += digits.slice(0, 2);
    right += digits[2];
    right += (0, bb26_1.random)('AA', digits === '890' ? 'FY' : 'AAA');
    return `${left} ${right}`;
}
exports.default = florida;
