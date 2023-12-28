"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Indiana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Indiana#Passenger_plates_1913_to_present)
 *
 * **Serial formats**:
 *
 * - `123A`
 * - `123AB`
 * - `123ABC`
 *
 * ```
 * import { indiana } from 'license-plate-serial-generator'
 *
 * indiana() // '946XOK'
 * ```
 */
function indiana() {
    const letters = (0, bb26_1.random)('ZZZ');
    const numbers = (0, lib_1.randomNumericString)(999);
    return `${numbers}${letters}`;
}
exports.default = indiana;
