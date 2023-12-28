"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Arkansas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Arkansas#1968_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `001 KPG` to `999 YFZ`
 *
 * ```
 * import { arkansas } from 'license-plate-serial-generator'
 *
 * arkansas() // '489 MKJ'
 * ```
 */
function arkansas() {
    const letters = (0, bb26_1.random)('KPG', 'YGA');
    const numbers = (0, lib_1.randomNumericString)(1, 999);
    return `${numbers} ${letters}`;
}
exports.default = arkansas;
