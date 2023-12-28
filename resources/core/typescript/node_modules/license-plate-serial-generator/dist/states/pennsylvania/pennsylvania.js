"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Pennsylvania](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Pennsylvania#1958_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `KLF-0000 to LBP-1791`
 *
 * ```
 * import { pennsylvania } from 'license-plate-serial-generator'
 *
 * pennsylvania() // 'KSS-6213'
 * ```
 */
function pennsylvania() {
    const letters = (0, bb26_1.random)('KLF', 'KTL');
    const numbers = (0, lib_1.randomNumericString)(9999);
    return `${letters}-${numbers}`;
}
exports.default = pennsylvania;
