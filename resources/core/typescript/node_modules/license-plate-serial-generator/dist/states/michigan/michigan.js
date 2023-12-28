"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Michigan](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Michigan#1971_to_present)
 *
 * **Serial format**: `ABC 1234`
 *
 * **Serial range**: `DAA 0000` to `ECR 9999`
 *
 * ```
 * import { michigan } from 'license-plate-serial-generator'
 *
 * michigan() // 'DYI 6070'
 * ```
 */
function michigan() {
    const letters = (0, bb26_1.random)('DAA', 'ECR');
    const numbers = (0, lib_1.randomNumericString)(9999);
    return `${letters} ${numbers}`;
}
exports.default = michigan;
