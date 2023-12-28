"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Illinois](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Illinois#1979_to_present)
 *
 * **Serial format**: `AB 12345`
 *
 * **Serial range**: `AQ 11001` to `BP 20703`
 *
 * ```
 * import { illinois } from 'license-plate-serial-generator'
 *
 * illinois() // 'AT 65597'
 * ```
 */
function illinois() {
    const letters = (0, bb26_1.random)('AQ', 'BP');
    const numbers = (0, lib_1.randomNumericString)(letters === 'AQ' ? 11001 : 0, letters === 'BP' ? 20703 : 99999);
    return `${letters} ${numbers}`;
}
exports.default = illinois;
