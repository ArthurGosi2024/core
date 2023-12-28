"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Louisiana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Louisiana#1964_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 AAA` to `999 DEV`
 *
 * ```
 * import { louisiana } from 'license-plate-serial-generator'
 *
 * louisiana() // '594 RTX'
 * ```
 */
function louisiana() {
    const numbers = (0, lib_1.randomNumericString)(999);
    const letters = (0, bb26_1.random)('AAA', numbers === '999' ? 'DEV' : 'ZZZ');
    return `${numbers} ${letters}`;
}
exports.default = louisiana;
