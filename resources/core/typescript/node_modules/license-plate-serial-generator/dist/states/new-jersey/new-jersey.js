"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [New Jersey](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Jersey#1959_to_present) (as of 2021-21-14)
 *
 * **Serial format**: `A12-BCD`
 *
 * **Serial range**: `A10-EFF` to `U50-PMC`
 *
 * **Restrictions**: `I`, `O`, `Q` not used in any position
 *
 * ```
 * import { newJersey } from 'license-plate-serial-generator'
 *
 * newJersey() // 'L11-HWC'
 * ```
 */
function newJersey() {
    let left = (0, random_item_1.default)((0, bb26_1.range)('V').filter((string) => !/[IOQ]/.test(string)));
    left += (0, lib_1.randomNumericString)(left === 'A' ? 10 : 0, left === 'U' ? 50 : 99);
    const right = (0, random_item_1.default)((0, bb26_1.range)(left === 'A10' ? 'EFF' : 'AAA', left === 'U50' ? 'PMD' : 'AAAA').filter((string) => !/[IOQ]/.test(string)));
    return `${left}-${right}`;
}
exports.default = newJersey;
