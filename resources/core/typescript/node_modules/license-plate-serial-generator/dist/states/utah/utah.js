"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ski = exports.god = exports.arch = void 0;
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/** @ignore */
function arch() {
    const letter = (0, bb26_1.random)('V', 'Z');
    const digits = (0, lib_1.randomNumericString)(letter === 'V' ? 215 : 1, letter === 'Z' ? 1 : 999, 3);
    const letters = (0, bb26_1.random)(letter + digits === 'V215' ? 'RK' : 'AA', letter + digits === 'Z001' ? 'AA' : 'AAA');
    const left = letter + digits.slice(0, 2);
    const right = digits.slice(2) + letters;
    return `${left} ${right}`;
}
exports.arch = arch;
/** @ignore */
function god() {
    let serial = (0, lib_1.randomNumericString)(5);
    serial += (0, bb26_1.random)(serial === '5' ? 'E' : 'Z');
    serial += (0, lib_1.randomNumericString)(serial === '5E' ? 1 : 9);
    serial += (0, bb26_1.random)('AA', serial === '5E1' ? 'NZ' : 'AAA');
    return serial;
}
exports.god = god;
/** @ignore */
function ski() {
    const numbers = (0, lib_1.randomNumericString)(1, 999);
    const left = (0, bb26_1.random)('F') + numbers.slice(0, 2);
    const right = numbers.slice(2) + (0, bb26_1.random)('AA', 'KB');
    return `${left} ${right}`;
}
exports.ski = ski;
/**
 * Generates random serial for [Utah](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Utah#1968_to_present)
 *
 * **Serial formats**:
 *
 * - Arches: `A12 3BC`
 * - In God We Trust: `1A2BC`
 * - Skier: `A12 3BC`
 *
 * **Serial ranges**:
 *
 * - Arches: `Z00 1AA` to `V21 5RK` (progressed backwards)
 * - In God We Trust: `0A0AA` to `5E1NY`
 * - Skier: `A00 1AA` to `F76 4TE`
 *
 * ```
 * import { utah } from 'license-plate-serial-generator'
 *
 * // Arches
 * utah() // 'X03 6XV'
 *
 * // In God We Trust
 * utah() // '5D2MY'
 *
 * // Skier
 * utah() // 'D38 1CT'
 * ```
 */
function utah() {
    return (0, random_item_1.default)([arch, god, ski])();
}
exports.default = utah;
