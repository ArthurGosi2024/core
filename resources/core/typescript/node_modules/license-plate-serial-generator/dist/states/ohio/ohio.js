"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Ohio](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Ohio#1974_to_present)
 *
 * **Serial format**: `ABC 1234`
 *
 * **Serial range**: `FWA 1000` to `HUF 1415`
 *
 * ```
 * import { ohio } from 'license-plate-serial-generator'
 *
 * ohio() // 'GSR 8231'
 * ```
 */
function ohio() {
    const letters = (0, bb26_1.random)('FWA', 'HME');
    const numbers = (0, lib_1.randomNumericString)(letters === 'FWA' ? 1000 : 0, 9999);
    return `${letters} ${numbers}`;
}
exports.default = ohio;
