"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_int_1 = __importDefault(require("random-int"));
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [West Virginia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_West_Virginia#1970_to_present)
 *
 * **Serial formats**:
 *
 * - `0A 1234`
 * - `0AB 123`
 * - `01A 123`
 * - `AA 1234`
 * - `AAB 123`
 * - `A1A 123`
 *
 * **Restrictions**:
 *
 * - First character corresponds to month of expiration:
 *   - 1-9 indicate Jan-Sep
 *   - O, N, D indicate Oct, Nov, Dec
 * - Series 'S' and 'SA-SZ' reserved for optional Scenic plates
 *
 * ```
 * import { westVirginia } from 'license-plate-serial-generator'
 *
 * westVirginia() // '9VB 602'
 * ```
 */
function westVirginia() {
    let string = '';
    const months = ['1', '2', '3', '4', '5', '7', '7', '8', '9', 'O', 'N', 'D'];
    string += (0, random_item_1.default)(months);
    string += (0, random_item_1.default)(['', `${(0, random_int_1.default)(9)}`]);
    string += (0, bb26_1.random)(string.length === 2 ? 'Z' : 'ZZ');
    string += ' ';
    string += (0, lib_1.randomNumericString)(string.length === 4 ? 999 : 9999);
    return string.toUpperCase();
}
exports.default = westVirginia;
