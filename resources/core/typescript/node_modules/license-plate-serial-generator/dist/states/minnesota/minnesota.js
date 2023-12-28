"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Minnesota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Minnesota#1955_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `AAA-001` to `DBY-020`
 *
 * ```
 * import { minnesota } from 'license-plate-serial-generator'
 *
 * minnesota() // 'ADZ-278'
 * ```
 */
function minnesota() {
    const letters = (0, bb26_1.random)('AAA', 'DBY');
    const numbers = (0, lib_1.randomNumericString)(1, 999);
    return `${letters}-${numbers}`;
}
exports.default = minnesota;
