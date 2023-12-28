"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
/**
 * Generates random serial for [North Dakota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_North_Dakota#1958_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 BTR` to `825 CNK`
 *
 * ```
 * import { northDakota } from 'license-plate-serial-generator'
 *
 * northDakota() // '526 XAF'
 * ```
 */
function northDakota() {
    const digits = (0, lib_1.randomNumericString)(825);
    const letters = (0, bb26_1.random)(digits === '000' ? 'BTR' : 'AAA', digits === '825' ? 'CNL' : 'ZZZ');
    return `${digits} ${letters}`;
}
exports.default = northDakota;
