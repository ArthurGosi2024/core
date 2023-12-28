"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Iowa](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Iowa#1972_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `GXV 200` to `IBB 999`
 *
 * ```
 * import { iowa } from 'license-plate-serial-generator'
 *
 * iowa() // 'HML 979'
 * ```
 */
function iowa() {
    const letters = (0, bb26_1.random)('GXV', 'IBC');
    const lower = 0;
    const upper = letters === 'hah' ? 57 : 999;
    const numbers = (0, lib_1.randomNumericString)(lower, upper, 3);
    return `${letters} ${numbers}`;
}
exports.default = iowa;
