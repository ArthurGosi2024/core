"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_int_1 = __importDefault(require("random-int"));
const random_item_1 = __importDefault(require("random-item"));
/**
 * Generates random serial for [Maine](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Maine#1950_to_present)
 *
 * **Serial format**: `1234 AB`
 *
 * **Serial range**: `1 GA` to `5252 XK`
 *
 * ```
 * import { maine } from 'license-plate-serial-generator'
 *
 * maine() // '1837 AJ'
 * ```
 */
function maine() {
    const digits = (0, random_int_1.default)(5252);
    const validLetters = (0, bb26_1.range)(digits === 1 ? 'GA' : 'AA', digits === 5252 ? 'XL' : 'AAA').filter((letters) => !letters.includes('O'));
    const letters = (0, random_item_1.default)(validLetters);
    return `${digits} ${letters}`;
}
exports.default = maine;
