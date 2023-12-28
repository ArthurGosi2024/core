"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Oregon](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Oregon#1950_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `001 BAA` to `006 LPV`
 *
 * ```
 * import { oregon } from 'license-plate-serial-generator'
 *
 * oregon() // '285 JJH'
 * ```
 */
function oregon() {
    const letters = (0, bb26_1.random)('BAA', 'KUH');
    const numbers = (0, lib_1.randomNumericString)(1, 999);
    return `${numbers} ${letters}`;
}
exports.default = oregon;
