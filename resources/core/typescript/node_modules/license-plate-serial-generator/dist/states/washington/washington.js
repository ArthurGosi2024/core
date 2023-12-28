"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Washington](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Washington_(state)#1950_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `AAA0000` to `BPY9526`
 *
 * ```
 * import { washington } from 'license-plate-serial-generator'
 *
 * washington() // 'AZJ1213'
 * ```
 */
function washington() {
    const letters = (0, bb26_1.random)('AAA', 'BKU');
    const digits = (0, lib_1.randomNumericString)(9999);
    return letters + digits;
}
exports.default = washington;
