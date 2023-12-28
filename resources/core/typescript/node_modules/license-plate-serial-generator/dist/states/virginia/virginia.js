"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Virginia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Virginia#1973_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial ranges**:
 *
 * - `VAA-1000` to `VZZ-9999`
 * - `UZZ-9999` to `UPA-2674` (progressing backwards)
 *
 * ```
 * import { virginia } from 'license-plate-serial-generator'
 *
 * virginia() // 'UTY-3023'
 * ```
 */
function virginia() {
    const ranges = [
        {
            digitsEnd: 9999,
            digitsStart: 1000,
            lettersEnd: 'VZZ',
            lettersStart: 'VAA'
        },
        {
            digitsEnd: 2764,
            digitsStart: 9999,
            lettersEnd: 'UZZ',
            lettersStart: 'UPA'
        }
    ];
    const range = (0, random_item_1.default)(ranges);
    const letters = (0, bb26_1.random)(range.lettersStart, range.lettersEnd);
    const numbers = (0, lib_1.randomNumericString)(letters === range.lettersStart ? range.digitsStart : 0, letters === range.lettersEnd ? range.digitsEnd : 9999);
    return `${letters}-${numbers}`;
}
exports.default = virginia;
