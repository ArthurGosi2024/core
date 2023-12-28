"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [South Carolina](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_South_Carolina#1976_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `LZD 101` to `RFE 478`
 *
 * ```
 * import { southCarolina } from 'license-plate-serial-generator'
 *
 * southCarolina() // 'OVL 579'
 * ```
 */
function southCarolina() {
    const letters = (0, bb26_1.random)('LZD', 'PVY');
    const numbers = (0, lib_1.randomNumericString)(letters === 'LZD' ? 101 : 0, 999);
    return `${letters} ${numbers}`;
}
exports.default = southCarolina;
