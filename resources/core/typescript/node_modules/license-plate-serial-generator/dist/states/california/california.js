"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [California](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_California#1963_to_present)
 *
 * **Serial format**: `1ABC123`
 *
 * **Serial range**: `6TPW000` to `8LAA459`
 *
 * ```
 * import { california } from 'license-plate-serial-generator'
 *
 * california() // '6WNT059'
 * ```
 */
function california() {
    let serial = (0, lib_1.randomNumericString)(6, 8);
    serial += (0, bb26_1.random)(serial === '6' ? 'TPW' : 'AAA', serial === '8' ? 'KPQ' : 'AAAA');
    serial += (0, lib_1.randomNumericString)(999);
    return serial;
}
exports.default = california;
