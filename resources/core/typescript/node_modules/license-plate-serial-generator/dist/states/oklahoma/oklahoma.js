"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Oklahoma](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Oklahoma#1979_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `AAA-001` to `JRK-999`
 *
 * ```
 * import { oklahoma } from 'license-plate-serial-generator'
 *
 * oklahoma() // 'HHQ-386'
 * ```
 */
function oklahoma() {
    const letters = (0, bb26_1.random)('AAA', 'JRL');
    const numbers = (0, lib_1.randomNumericString)(1, 999);
    return `${letters}-${numbers}`.toUpperCase();
}
exports.default = oklahoma;
