"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Maryland](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Maryland#1970_to_present)
 *
 * **Serial format**: `1AB2345`
 *
 * **Serial range**: `8CN0000` to `9DW2552`
 *
 * ```
 * import { maryland } from 'license-plate-serial-generator'
 *
 * maryland() // '9DL7397'
 * ```
 */
function maryland() {
    const digit = (0, random_item_1.default)([8, 9]);
    const letters = (0, bb26_1.random)(digit === 8 ? 'CN' : 'AA', digit === 9 ? 'DW' : 'ZZ');
    const digits = (0, lib_1.randomNumericString)(0, `${digit}${letters}` === '9DW' ? 2552 : 9999);
    return `${digit}${letters}${digits}`;
}
exports.default = maryland;
