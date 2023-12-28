"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Washington, D.C.](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Washington,_D.C.#1966_to_present)
 *
 * **Serial format**: `AB-1234`
 *
 * **Serial range**: `FN-4000` to `GB-4718`
 *
 * ```
 * import { washingtonDc } from 'license-plate-serial-generator'
 *
 * washingtonDc() // 'FS-6566'
 * ```
 */
function washingtonDc() {
    const letters = (0, bb26_1.random)('FN', 'GB');
    const numbers = (0, lib_1.randomNumericString)(letters === 'FN' ? 4000 : 0, letters === 'GB' ? 4718 : 9999);
    return `${letters}-${numbers}`;
}
exports.default = washingtonDc;
