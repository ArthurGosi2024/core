"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/** @ignore */
const months = [
    { codes: ['A', 'B'] },
    { codes: ['C'] },
    { codes: ['D', 'E'] },
    { codes: ['F', 'G'] },
    { codes: ['H', 'J'] },
    { codes: ['K', 'L'] },
    { codes: ['M', 'N'] },
    { codes: ['P', 'R'] },
    { codes: ['S', 'T'] },
    { codes: ['U', 'V'] },
    { codes: ['W', 'X'] },
    { codes: ['Y', 'Z'] }
];
/**
 * Generates random serial for [Missouri](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Missouri#1980_to_present)
 *
 * **Serial format**: `XA1 B2C`, where `X` corresponds to month of expiration
 *
 * ```
 * import { missouri } from 'license-plate-serial-generator'
 *
 * missouri() // 'DB0 A0H'
 * ```
 */
function missouri() {
    const month = (0, random_item_1.default)((0, random_item_1.default)(months).codes);
    const left = month + (0, bb26_1.random)('Z') + (0, lib_1.randomNumericString)(9);
    const right = (0, bb26_1.random)('Z') + (0, lib_1.randomNumericString)(9) + (0, bb26_1.random)('Z');
    return `${left} ${right}`;
}
exports.default = missouri;
