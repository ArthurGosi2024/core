"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Colorado](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Colorado#1975_to_present)
 *
 * **Serial format**: `ABC-D12`
 *
 * **Serial range**: `AEW-T01` to `BFM-Y21`
 *
 * ```
 * import { colorado } from 'license-plate-serial-generator'
 *
 * colorado() // 'BAU-K61'
 * ```
 */
function colorado() {
    const letters = (0, bb26_1.random)('AEWT', 'BFMZ');
    const numbers = (0, lib_1.randomNumericString)(1, letters === 'bfmy' ? 21 : 99);
    return `${letters.slice(0, 3)}-${letters[3]}${numbers}`.toUpperCase();
}
exports.default = colorado;
