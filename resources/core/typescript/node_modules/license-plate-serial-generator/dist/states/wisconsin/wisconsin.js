"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Wisconsin](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Wisconsin#1968_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `AAA-1001` to `AFR-2643`
 *
 * ```
 * import { wisconsin } from 'license-plate-serial-generator'
 *
 * wisconsin() // 'AFF-2603'
 * ```
 */
function wisconsin() {
    const letters = (0, bb26_1.random)('AAA', 'AFR');
    const numbers = (0, lib_1.randomNumericString)(letters === 'AAA' ? 1001 : 0, letters === 'AFR' ? 2743 : 9999);
    return `${letters}-${numbers}`.toUpperCase();
}
exports.default = wisconsin;
