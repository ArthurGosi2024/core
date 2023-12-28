"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Massachusetts](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Massachusetts#1967_to_present)
 *
 * **Serial format**: `1ABC 23`
 *
 * **Serial range**: `1AAA 10` to `9ZZZ 99`
 *
 * **Restrictions**: Letters `I`, `O`, `Q`, and `U` not used
 *
 * ```
 * import { massachusetts } from 'license-plate-serial-generator'
 *
 * massachusetts() // '1JPW 65'
 * ```
 */
function massachusetts() {
    const validLetters = (0, bb26_1.range)('AAA', 'AAAA').filter((letters) => !/[IOQU]/.test(letters));
    const letters = (0, random_item_1.default)(validLetters);
    const numbers = (0, lib_1.randomNumericString)(letters === 'AAA' ? 10 : 0, 99);
    return `1${letters} ${numbers}`;
}
exports.default = massachusetts;
