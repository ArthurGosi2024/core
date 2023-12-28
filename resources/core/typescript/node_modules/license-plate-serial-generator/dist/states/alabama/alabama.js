"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Alabama](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alabama#1976_to_present)
 *
 * **Serial format**: `0AB1234` or `00AB123`, where `0` or `00` is county code
 *
 * ```
 * import { alabama } from 'license-plate-serial-generator'
 *
 * alabama() // '37KA7685'
 * ```
 */
function alabama() {
    // TODO: Weigh county code choice based on population
    const county = (0, lib_1.randomNumericString)(1, 67);
    const letters = (0, bb26_1.random)('AA', 'ZZ');
    const digits = (0, lib_1.randomNumericString)(county.length === 2 ? 9999 : 999);
    return county + letters + digits;
}
exports.default = alabama;
