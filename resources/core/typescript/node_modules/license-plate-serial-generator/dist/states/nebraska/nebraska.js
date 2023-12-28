"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abc123 = exports.countyCoded = void 0;
const bb26_1 = require("bb26");
const get_range_1 = __importDefault(require("get-range"));
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/** @ignore */
function countyCoded(county) {
    const letters = `${county}-${(0, bb26_1.random)('ZZ')}`;
    const digits = (0, lib_1.randomNumericString)(Math.pow(10, (7 - letters.length)) - 1);
    return letters + digits;
}
exports.countyCoded = countyCoded;
/** @ignore */
function abc123() {
    const letters = (0, bb26_1.random)('UMA', 'WDH');
    const numbers = (0, lib_1.randomNumericString)(999);
    return `${letters} ${numbers}`;
}
exports.abc123 = abc123;
/**
 * Generates random serial for [Nebraska](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nebraska#1966_to_present)
 *
 * **Serial formats**:
 *
 * - Douglas, Lancaster, and Sarpy counties: `ABC 123`
 * - Other counties:
 *   - `X-A1234`
 *   - `X-AB123`
 *   - `XX-A123`
 *   - `XX-AB12`
 *
 * **Serial ranges**:
 *
 * - Douglas, Lancaster, and Sarpy counties: Mid-`U` series to `WDH 999`
 *
 * ```
 * import {nebraska } from 'license-plate-serial-generator'
 *
 * // Douglas, Lancaster, and Sarpy counties
 * nebraska() // 'VKO 137'
 *
 * // Other counties
 * nebraska() // '14-QD84'
 * ```
 */
function nebraska() {
    const counties = Array.from((0, get_range_1.default)({ start: 1, end: 93 }));
    // TODO: Weigh county choice by population
    const county = (0, random_item_1.default)(counties);
    return [1, 2, 59].includes(county) ? abc123() : countyCoded(county);
}
exports.default = nebraska;
