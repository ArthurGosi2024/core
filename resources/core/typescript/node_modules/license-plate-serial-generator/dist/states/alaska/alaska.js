"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Alaska](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alaska#1953_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `FUZ 100` to `FUZ 999`, `GAA 100` to `GZZ 999`, `KAA 100` to `KDY 641`
 *
 * ```
 * import { alaska } from 'license-plate-serial-generator'
 *
 * alaska() // 'KCA 245'
 * ```
 */
function alaska() {
    const validLetters = ['FUZ']
        .concat((0, bb26_1.range)('GAA', 'HAA'))
        .concat((0, bb26_1.range)('KAA', 'KDZ'));
    const letters = (0, random_item_1.default)(validLetters);
    const numbers = (0, lib_1.randomNumericString)(100, 999);
    return `${letters} ${numbers}`;
}
exports.default = alaska;
