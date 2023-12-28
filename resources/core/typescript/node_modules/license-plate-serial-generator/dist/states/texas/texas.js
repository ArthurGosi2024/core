"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Texas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Texas#1975_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `BBB-0001` to `MCZ-9999`
 *
 * ```
 * import { texas } from 'license-plate-serial-generator'
 *
 * texas() // 'BSD-7082'
 * ```
 */
function texas() {
    const letters = (0, bb26_1.random)('BBB', 'KZR');
    const numbers = (0, lib_1.randomNumericString)(1, 9999);
    return `${letters}-${numbers}`;
}
exports.default = texas;
