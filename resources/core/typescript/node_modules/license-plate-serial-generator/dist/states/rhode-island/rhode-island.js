"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeric = exports.alphaNumeric = void 0;
const bb26_1 = require("bb26");
const random_int_1 = __importDefault(require("random-int"));
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/** @ignore */
function alphaNumeric() {
    const letters = (0, bb26_1.random)('AA', 'ZZ');
    const numbers = (0, random_int_1.default)(10, 999);
    return `${letters}-${numbers}`;
}
exports.alphaNumeric = alphaNumeric;
/** @ignore */
function numeric() {
    return (0, lib_1.randomNumericString)(99999);
}
exports.numeric = numeric;
/**
 * Generates random serial for [Rhode Island](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Rhode_Island#1961_to_present)
 *
 * **Serial formats**:
 *
 * - Numeric: `12345`
 * - Alpha-numeric: `AB-12`, `AB-123`
 *
 * ```
 * import { rhodeIsland } from 'license-plate-serial-generator'
 *
 * // Numeric
 * rhodeIsland() // '56245'
 *
 * // Alpha-numeric
 * rhodeIsland() // 'UX-561'
 * ```
 */
function rhodeIsland() {
    return (0, random_item_1.default)([alphaNumeric, numeric])();
}
exports.default = rhodeIsland;
