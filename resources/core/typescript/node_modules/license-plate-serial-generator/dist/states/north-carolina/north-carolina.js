"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [North Carolina](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_North_Carolina#1975_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `PAA-1001` to `PLA-9999`
 *
 * ```
 * import { northCarolina } from 'license-plate-serial-generator'
 *
 * northCarolina() // 'PHT-1021'
 * ```
 */
function northCarolina() {
    const letters = (0, bb26_1.random)('PAA', 'PLA');
    const numbers = (0, lib_1.randomNumericString)(letters === 'PAA' ? 1001 : 0, 9999);
    return `${letters}-${numbers}`;
}
exports.default = northCarolina;
