"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Vermont](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Vermont#1967_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `AAB 100` to `HNP 223`
 *
 * ```
 * import { vermont } from 'license-plate-serial-generator'
 *
 * vermont() // 'AVW 014'
 * ```
 */
function vermont() {
    const letters = (0, bb26_1.random)('AAB', 'HNQ');
    const numbers = (0, lib_1.randomNumericString)(letters === 'HNP' ? 100 : 0, 999);
    return `${letters} ${numbers}`;
}
exports.default = vermont;
