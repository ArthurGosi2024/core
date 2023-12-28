"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Georgia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Georgia_(U.S._state)#1971_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `PFA0000` to `PLZ9999`
 *
 * ```
 * import { georgia } from 'license-plate-serial-generator'
 *
 * georgia() // 'PJW3134'
 * ```
 */
function georgia() {
    const letters = (0, bb26_1.random)('PFA', 'PMA');
    const digits = (0, lib_1.randomNumericString)(9999);
    return letters + digits;
}
exports.default = georgia;
