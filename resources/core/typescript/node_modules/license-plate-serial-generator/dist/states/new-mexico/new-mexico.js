"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [New Mexico](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Mexico#1961_to_present)
 *
 * **Serial format**: `123-ABC`
 *
 * **Serial range**: `001-MAA` to `999-WJT`
 *
 * ```
 * import { newMexico } from 'license-plate-serial-generator'
 *
 * newMexico() // 'A46-TEL'
 * ```
 */
function newMexico() {
    const digits = (0, lib_1.randomNumericString)(1, 999);
    const letters = (0, bb26_1.random)(digits === '001' ? 'MAA' : 'AAA', digits === '999' ? 'WJT' : 'ZZZ');
    return `${digits}-${letters}`;
}
exports.default = newMexico;
