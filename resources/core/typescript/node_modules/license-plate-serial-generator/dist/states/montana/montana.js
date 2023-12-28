"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_int_1 = __importDefault(require("random-int"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Montana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Montana#1976_to_present)
 *
 * **Serial format**: `1-12345A` or `10-1234A`, where left half is county code
 *
 * ```
 * import { montana } from 'license-plate-serial-generator'
 *
 * montana() // '5-95754R'
 * ```
 */
function montana() {
    // TODO: Weigh county choice by population
    const county = (0, random_int_1.default)(1, 56).toString();
    const numbers = (0, lib_1.randomNumericString)(county.length === 1 ? 99999 : 9999);
    const letter = (0, bb26_1.random)('Z');
    return `${county}-${numbers}${letter}`;
}
exports.default = montana;
